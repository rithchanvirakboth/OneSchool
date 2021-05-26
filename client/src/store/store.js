import { createStore } from "vuex";

import axios from "axios";
import router from "../router/router";

import setAuthToken from "../utils/setAuthToken";

const store = createStore({
  state: {
    isAuthenticated: false,
    loading: true,
    user: null,
    token: localStorage.getItem("token"),
  },
  mutations: {
    isAuth(state) {
      state.isAuthenticated = true;
    },
    isNotAuth(state) {
      state.isAuthenticated = false;
    },
    isLoading(state) {
      state.loading = true;
    },
    isNotLoading(state) {
      state.loading = false;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    // @des: Login User
    async login({ commit }, formData) {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.post("/api/auth/", formData, config);

        // Setting Token onto Local Storage
        localStorage.setItem("token", res.data.token);
        commit("isAuth");
        commit("isNotLoading");

        // Calling getUser to load user after login
        this.dispatch("getUser");
      } catch (error) {
        console.error(error.response.data);
      }
    },

    // @des: Register User
    async register({ commit }, formData) {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.post("/api/register/", formData, config);

        // Setting Token onto Local Storage
        localStorage.setItem("token", res.data.token);
        commit("isAuth");
        commit("isNotLoading");

        // Calling getUser to load user after registering
        this.dispatch("getUser");
      } catch (error) {
        console.error(error.response.data);
      }
    },

    // @des: Load User
    async getUser({ commit }) {
      // If there's a token, then set the token to header
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      try {
        const res = await axios.get("/api/auth/");
        commit("setUser", res.data.user);
        commit("isAuth");
        commit("isNotLoading");
        console.log("isAuthenticated(store): ", this.state.isAuthenticated);
        router.push("/homepage");
      } catch (error) {
        console.error(error.response);
      }
    },

    async canAccess() {
      try {
        const res = await axios.get("/api/auth/");
        if (res) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error(error.response);
      }
    },
  },
  getters: {},
  modules: {},
});

export default store;
