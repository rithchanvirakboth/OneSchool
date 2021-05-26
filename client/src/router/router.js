import { createWebHistory, createRouter } from "vue-router";
import NotFound from "../components/NotFound";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HomePage from "../components/pages/HomePage";
import Profile from "../components/pages/Profile";

import store from "../store/store";
// const checkAuth = (to) => {
//   if (
//     to.name !== "Login" &&
//     to.name !== "Register" &&
//     !store.state.isAuthenticated
//   ) {
//     return "/";
//   }
// };

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
    // beforeEnter: [checkAuth],
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
    meta: {
      requireAuth: true,
    },
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
router.beforeResolve(async (to, from) => {
  const requiresAuth = to.matched.some((record) => record.meta.requireAuth);
  const canAccess = await store.dispatch("canAccess");
  if (requiresAuth && !canAccess) {
    return `${from.path}`;
  }
});

export default router;
