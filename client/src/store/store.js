import { createStore, createLogger } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Andrew",
      email: "andrew@gmail.com",
    },
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
});

export default store;
