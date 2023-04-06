const transitionDay = 5;

export const formatDaysCount = (daysCount: number): string => {
  let result = 'день';

  if (daysCount > 1 && daysCount < transitionDay) {
    result = 'дня';
  }

  if (daysCount >= transitionDay) {
    result = 'дней';
  }

  return result;
};
