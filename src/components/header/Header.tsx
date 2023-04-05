import React, { ReactElement } from 'react';

import styles from './Header.module.css';

import { LogoutButton } from 'shared/components';

export const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <h1>Simple Hotel Check</h1>
      <LogoutButton>Выйти</LogoutButton>
    </header>
  );
};
