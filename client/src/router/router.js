import { createWebHistory, createRouter } from "vue-router";
import Test from "../components/Test";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
const routes = [
  {
    path: "/testing",
    component: Test,
  },
  {
    path: "/",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
