import {
  collection,
  connectFirestoreEmulator,
  doc,
  enableIndexedDbPersistence,
  Firestore,
  getFirestore,
  onSnapshot,
} from 'firebase/firestore';
import { defineStore } from 'pinia';
import environment from '../environments/environment';
import { app } from '../main';
import { useAuth } from './auth';

let firestore: Firestore | undefined;
let isInitialized = false;

export const useFirestore = defineStore('firestore', {
  state: (): FirestoreStore => ({
    portfolios: [],
    ledger: [],
    trades: [],
    userAccount: null,
  }),
  actions: {
    sync() {
      firestore = getFirestore(app);

      if (!isInitialized) {
        if (
          location.hostname === 'localhost' &&
          environment.emulators &&
          typeof environment.emulators.host === 'string' &&
          typeof environment.emulators.firestore === 'number'
        ) {
          connectFirestoreEmulator(
            firestore,
            environment.emulators.host,
            environment.emulators.firestore
          );
        }
        enableIndexedDbPersistence(firestore);
        isInitialized = true;
      }

      const auth = useAuth();

      if (auth.user) {
        const portfoliosCollection = collection(firestore, 'portfolios');
        onSnapshot(portfoliosCollection, (snapshot) => {
          this.portfolios = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        });

        const ledgerCollection = collection(firestore, 'ledger');
        onSnapshot(ledgerCollection, (snapshot) => {
          this.ledger = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        });

        const tradesCollection = collection(firestore, 'trades');
        onSnapshot(tradesCollection, (snapshot) => {
          this.trades = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        });

        const userAccountDoc = doc(firestore, `users/${auth.user.uid}`);
        onSnapshot(userAccountDoc, (doc) => {
          this.userAccount = {
            id: doc.id,
            ...doc.data(),
          } as UserAccount;
        });
      }
    },
  },
});
