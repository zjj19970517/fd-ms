import { App } from "vue";
import SvgIcon from "../components/SvgIcon.vue";

// doc: https://webpack.docschina.org/guides/dependency-management/#requirecontext
// 通过 require.context() 函数来 context
const svgRequire = require.context("./svg", false, /\.svg$/);

// 遍历图标，把图标作为 request 传入到 require 导入函数中，完成本地 svg 图标的导入
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon));

// 注册全局组件 <svg-icon />
export default (app: App<Element>): void => {
  app.component("svg-icon", SvgIcon);
};
