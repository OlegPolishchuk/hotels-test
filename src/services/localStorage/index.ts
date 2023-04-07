export const setUserToLocalStorage = (userName: string): void => {
  localStorage.setItem('user', userName);
};

export const getUserFromLocalStorage = (): string => {
  const userName = localStorage.getItem('user');

  return userName === null ? '' : userName;
};

export const removeUserFromLocalStorage = (): void => {
  localStorage.removeItem('user');
};
