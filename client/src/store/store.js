import { createStore, createLogger } from "vuex";

const store = createStore({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    isAuth(state) {
      state.isAuthenticated = true;
    },
    isNotAuth(state) {
      state.isAuthenticated = false;
    },
  },
  actions: {},
  getters: {},
  modules: {},
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
});

export default store;
