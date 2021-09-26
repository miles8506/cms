import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export function utcDayjsFormat(timer: string, formatTime: string) {
  return dayjs.utc(timer).utcOffset(8).format(formatTime);
}
