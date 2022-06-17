import { defineStore } from 'pinia';
import { useAuth } from '.';

let attempts = 0;
let isAuthorizing = false;

export const useApi = defineStore('api', {
  state: (): APIStore => ({
    status: 'offline',
    token: null,
  }),
  actions: {
    async authorize(url = '/api/v1/auth/authorization') {
      if (!isAuthorizing) {
        isAuthorizing = true;

        try {
          attempts++;

          if (!this.token && attempts <= 10) {
            const auth = useAuth();

            if (auth.user && auth.user.uid) {
              const data = await this.get(url, { uid: auth.user.uid }, true);

              if (data.token) {
                this.token = data.token;
                attempts = 0;
              } else {
                this.token = null;
              }
            }
          }
        } catch (error) {
          console.error(error);
        }
      }

      isAuthorizing = false;
    },
    async get(url: string, params?: Record<string, string>, authorize = true) {
      if (authorize) {
        await this.authorize();
      }

      const response = await fetch(
        `${url}${params ? `?${new URLSearchParams(params)}` : ''}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        try {
          const data = await response.json();
          return data;
        } catch (error) {
          return response.status;
        }
      } else if (response.status === 401) {
        setTimeout(async () => {
          this.token = null;
          return await this.get(url, params, true);
        }, 1000);
      }
    },
    async post(url: string, body?: Record<string, unknown>, authorize = true) {
      if (authorize) {
        await this.authorize();
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(body),
      });

      console.log(response);

      if (response.status === 200) {
        try {
          const data = await response.json();
          return data;
        } catch (error) {
          return response.status;
        }
      } else if (response.status === 401) {
        setTimeout(async () => {
          this.token = null;
          return await this.post(url, body, true);
        }, 1000);
      }
    },
  },
});
