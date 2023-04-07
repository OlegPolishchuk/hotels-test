const transientParameter = 5;

export const getCorrectHotelsWord = (count: number): string => {
  const lastDigit = Number(`${count}`.split('').reverse()[0]);

  if (lastDigit === 1) {
    return 'отель';
  }

  if (lastDigit > 1 && lastDigit < transientParameter) {
    return 'отеля';
  }

  return 'отелей';
};
