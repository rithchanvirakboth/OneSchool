import { createWebHistory, createRouter } from "vue-router";
import NotFound from "../components/NotFound";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HomePage from "../components/pages/HomePage";
import Profile from "../components/pages/Profile";

import store from "../store/store";

const routes = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },

  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Homepage",
    path: "/homepage",
    component: HomePage,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {
  if (
    to.name !== "Login" &&
    to.name !== "Register" &&
    !store.state.isAuthenticated
  ) {
    return `${from.path}`;
  }
  if (
    to.name === "Login" &&
    to.name === "Register" &&
    store.state.isAuthenticated
  ) {
    return `${from.path}`;
  }
});

export default router;
