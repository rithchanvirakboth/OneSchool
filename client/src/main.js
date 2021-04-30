import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "../src/router/router";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
