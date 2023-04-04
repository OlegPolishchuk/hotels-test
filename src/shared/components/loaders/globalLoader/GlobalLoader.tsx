import React, { ReactElement } from 'react';

import styles from './GlobalLoader.module.css';

import { Loader } from 'shared/components';

export const GlobalLoader = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Loader />
    </div>
  );
};
