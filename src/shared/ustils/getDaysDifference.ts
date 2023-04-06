import dayjs from 'dayjs';

export const getDaysDifference = (checkIn: string, checkOut: string): string => {
  const start = dayjs(checkIn);
  const end = dayjs(checkOut);

  return `${end.diff(start, 'day')}`;
};
