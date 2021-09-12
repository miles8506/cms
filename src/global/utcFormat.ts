import { App } from 'vue';
import { utcDayjsFormat } from '@/utils/utcTimeformat';

const formatString = 'YYYY/MM/DD HH:mm:ss';

// format utc時間
export function registerUtc(app: App<Element>) {
  app.config.globalProperties.$filterUtc = function (
    timer: string,
    formatTime: string = formatString
  ) {
    return utcDayjsFormat(timer, formatTime);
  };
}
