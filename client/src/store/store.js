import { createStore, createLogger } from "vuex";
import axios from "axios";
import router from "../router/router";

import setAuthToken from "../utils/setAuthToken";

const store = createStore({
  state: {
    isAuthenticated: false,
    user: "",
    token: "",
  },
  mutations: {
    isAuth(state) {
      state.isAuthenticated = true;
    },
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, formData) {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.post("/api/auth/", formData, config);
        localStorage.setItem("token", res.data.token);
        commit("setToken", res.data.token);
        this.dispatch("getUser");
        console.log(res);
      } catch (error) {
        console.error(error.response.data);
      }
    },
    async register({ commit }, formData) {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.post("/api/register/", formData, config);
        localStorage.setItem("token", res.data.token);
        commit("setToken", res.data.token);
        this.dispatch("getUser");
        console.log(res);
      } catch (error) {
        console.error(error.response.data);
      }
    },

    async getUser({ commit }) {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      try {
        const res = await axios.get("/api/auth/");
        commit("setUser", res.data._id);
        console.log(res.data);
        console.log(this.state.user);
        router.push("/homepage");
      } catch (error) {
        console.error(error.response.data);
      }
    },
  },
  getters: {},
  modules: {},
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
});

export default store;
