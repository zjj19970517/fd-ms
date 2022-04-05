import { App } from "vue";
import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn";

import "element-plus/lib/theme-chalk/index.css";

export default function install(app: App<Element>): void {
  app.use(ElementPlus, { locale });
}
