import React, { ReactElement } from 'react';

import styles from './Login.module.css';

import { LoginForm } from 'components';

export const Login = (): ReactElement => {
  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};
