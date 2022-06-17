import {
  Auth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { defineStore } from 'pinia';
import environment from '../environments/environment';
import { app } from '../main';
import router from '../router';
import { useApi } from './api';

let auth: Auth | undefined;
let isInitialized = false;

export const useAuth = defineStore('auth', {
  state: (): AuthStore => ({
    isAuthenticated: null,
    user: null,
    errorMessage: null,
    hasError: false,
    onAuthStateChanged: null,
  }),
  actions: {
    async startup() {
      auth = getAuth(app);

      if (
        !isInitialized &&
        location.hostname === 'localhost' &&
        environment.emulators &&
        typeof environment.emulators.auth === 'number'
      ) {
        connectAuthEmulator(
          auth,
          `http://${environment.emulators.host}:${environment.emulators.auth}`
        );
        isInitialized = true;
      }

      onAuthStateChanged(
        auth,
        (userCredential) => {
          if (userCredential) {
            this.user = userCredential;
            this.isAuthenticated = true;
          } else {
            this.user = null;
            this.isAuthenticated = false;

            if (
              typeof router.currentRoute.value.name === 'string' &&
              !/(UserLogin|SignUp)/gi.test(router.currentRoute.value.name)
            ) {
              router.push({ name: 'UserLogin' });
            }
          }

          if (Array.isArray(this.onAuthStateChanged)) {
            this.onAuthStateChanged.forEach((callback) => callback());
          }
        },
        console.error
      );
    },
    listenAuthState(callback: () => void) {
      if (!this.onAuthStateChanged) {
        this.onAuthStateChanged = [];
      }

      this.onAuthStateChanged.push(callback);
    },
    async login(email: string, password: string) {
      try {
        if (auth) {
          this.errorMessage = null;
          this.hasError = false;

          this.user = (await signInWithEmailAndPassword(auth, email, password)).user;

          router.push({ name: 'PublicHome' });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error && error.code) {
          switch (error.code) {
            case 'auth/wrong-password':
              this.errorMessage = 'Your password is invalid. Try again.';
              break;
            case 'auth/invalid-email':
              this.errorMessage = 'Your email address is invalid. Try again.';
              break;
            default:
              this.errorMessage = 'An error occurred. Try again.';
              break;
          }

          this.hasError = true;
        }
      }
    },
    async createStripeAccount(firstName: string, lastName: string) {
      try {
        if (this.user && this.user.email) {
          const api = useApi();
          const name = {
            first: firstName,
            last: lastName,
          };
          const accountStatus = await api.post('/api/v1/user/account/create', {
            email: this.user.email,
            name,
          });

          if (accountStatus === 200 || accountStatus === 409) {
            const redirect = await api.post('/api/v1/stripe/account/express/create', {
              email: this.user.email,
              name,
            });

            if (redirect.accountLink && redirect.accountLink.url) {
              window.location.href = redirect.accountLink.url;
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    async signUp(firstName: string, lastName: string, email: string, password: string) {
      try {
        if (auth) {
          this.errorMessage = null;
          this.hasError = false;

          this.user = (await createUserWithEmailAndPassword(auth, email, password)).user;

          await this.createStripeAccount(firstName, lastName);

          router.push({ name: 'PublicHome' });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error && error.code) {
          switch (error.code) {
            default:
              this.errorMessage = 'An error occurred. Try again.';
              break;
          }

          this.hasError = true;
        }
      }
    },
    signOut() {
      if (auth) {
        auth.signOut();
      }
    },
  },
});
