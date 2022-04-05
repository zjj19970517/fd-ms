import { App } from "vue";

import installElement from "../plugins/element"; // 引入 Element Plus
import installSvgIcons from "@/icons"; // 导入 svgIcon

export default function installPlugins(app: App<Element>): void {
  installSvgIcons(app);
  installElement(app);
}
