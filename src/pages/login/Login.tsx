import React, { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';
import { selectIsUserAuth } from 'selectors';

import styles from './Login.module.css';

import { LoginForm } from 'components';
import { ROUTES } from 'shared/constants';
import { useAppSelector } from 'shared/hooks';

export const Login = (): ReactElement => {
  const navigate = useNavigate();

  const isUserAuth = useAppSelector(selectIsUserAuth);

  if (isUserAuth) {
    navigate(ROUTES.main);
  }

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};
