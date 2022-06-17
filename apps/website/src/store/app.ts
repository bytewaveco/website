import { defineStore } from 'pinia';

export const useApp = defineStore('app', {
  state: (): AppStore => ({
    isLoading: true,
  }),
  actions: {
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
  },
});
