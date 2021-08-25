import type { App } from 'vue';

// Element-plus
import {
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
} from 'element-plus';
import 'element-plus/lib/theme-chalk/base.css';
const Elcomponents = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
];

export function registerElementPlus(app: App<Element>): void {
  Elcomponents.forEach((Elcomponent) => {
    app.component(Elcomponent.name, Elcomponent);
  });
}
