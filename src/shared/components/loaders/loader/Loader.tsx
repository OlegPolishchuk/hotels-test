import React, { ReactElement } from 'react';

import styles from './Loader.module.css';

export const Loader = (): ReactElement => {
  return (
    <div className={styles['lds-spinner']}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
