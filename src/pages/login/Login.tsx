import React, { ReactElement, useEffect } from 'react';

import bg from '/login_bg.jpg';

import { useNavigate } from 'react-router-dom';
import { selectIsUserAuth } from 'selectors';

import styles from './Login.module.css';

import { LoginForm } from 'components';
import { ROUTES } from 'shared/constants';
import { useAppSelector } from 'shared/hooks';

export const Login = (): ReactElement => {
  const navigate = useNavigate();

  const isUserAuth = useAppSelector(selectIsUserAuth);

  useEffect(() => {
    if (isUserAuth) {
      navigate(ROUTES.main);
    }
  }, [isUserAuth]);

  return (
    <div className={styles.login} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};
