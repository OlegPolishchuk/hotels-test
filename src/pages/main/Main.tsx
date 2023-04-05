import React, { ReactElement } from 'react';

import styles from './Main.module.css';

import { Header } from 'components';

export const Main = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};
