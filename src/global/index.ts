import type { App } from 'vue';

import { registerElementPlus } from './register-element-plus';
import { registerUtc } from './utcFormat';

export function registerGlobalApp(app: App<Element>): void {
  registerElementPlus(app);
  registerUtc(app);
}
