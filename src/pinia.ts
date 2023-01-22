import { createPinia, defineStore } from "pinia";

export type User = {
  id: number;
};

/**
 * ログイン中ユーザーの読み書きを行うストア
 */
export const useCurrentUserStore = defineStore("currentUser", {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isLoggedIn(): boolean {
      return !!this.user;
    },
  },
  actions: {
    login(user: User) {
      this.user = user;
    },
    logout() {
      this.user = null;
    },
  },
});

/**
 * Pinia のセットアップ
 */
export const pinia = createPinia();

export default pinia;
