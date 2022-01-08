import { createApp } from "vue";
import ElementPlus from "element-plus";

import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(ElementPlus, { locale }).use(store).use(router).mount("#app");
