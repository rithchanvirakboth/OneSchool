import { createWebHistory, createRouter } from "vue-router";
import NotFound from "../components/NotFound";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HomePage from "../components/pages/HomePage";
import Profile from "../components/pages/Profile";
const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/homepage",
    component: HomePage,
  },
  {
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

export default router;
