import dayjs from 'dayjs';

export const formatCheckOut = (
  checkIn: string,
  daysCount: string,
  format: string = 'YYYY-MM-DD',
): string => {
  return dayjs(checkIn).add(+daysCount, 'day').format(format);
};
