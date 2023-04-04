import React, { ReactElement } from 'react';

import { selectIsAppLoading } from 'selectors';

import styles from './Login.module.css';

import { LoginForm } from 'components';
import { useAppSelector } from 'shared/hooks';
import {GlobalLoader} from "shared/components";


export const Login = (): ReactElement => {
  const isLoading = useAppSelector(selectIsAppLoading);

  if (isLoading) {
    return (
      <div>
        <GlobalLoader />
      </div>
    );
  }

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};
