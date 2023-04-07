import React, { ReactElement } from 'react';

import styles from './Header.module.css';

import { LogoutButton } from 'shared/components';
import { useAppDispatch } from 'shared/hooks';
import { logoutUser } from 'store/sagas';

export const Header = (): ReactElement => {
  const dispatch = useAppDispatch();

  const handleLogout = (): void => {
    dispatch(logoutUser());
  };

  return (
    <header className={styles.header}>
      <h1>Simple Hotel Check</h1>
      <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
    </header>
  );
};
