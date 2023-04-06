import dayjs from 'dayjs';
import 'dayjs/locale/ru.js';

export const formatDate = (date: string, format: string = 'YYYY-MM-DD'): string => {
  return dayjs(date).locale('ru').format(format);
};
