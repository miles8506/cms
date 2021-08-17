import type { App } from 'vue';

import { registerElementPlus } from './register-element-plus';

export function registerGlobalApp(app: App<Element>): void {
  registerElementPlus(app);
}
