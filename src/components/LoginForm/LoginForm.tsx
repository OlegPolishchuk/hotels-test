import React, { ReactElement } from 'react';

import { useForm } from 'react-hook-form';

import styles from 'pages/login/Login.module.css';
import { Button, Input } from 'shared/components';
import { useAppDispatch } from 'shared/hooks';
import { loginUser } from 'store/sagas';
import { LoginFormData } from 'types';

const MAIN_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const LoginForm = (): ReactElement => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ mode: 'onBlur' });

  const onSubmit = handleSubmit(data => {
    dispatch(loginUser(data));
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        className="full"
        labelTitle="Логин"
        {...register('login', {
          required: { value: true, message: 'Обязательно для заполнения' },
          pattern: {
            value: MAIN_REGEX,
            message: 'Некорректный адрес электронной почты',
          },
        })}
        errorMessage={errors.login?.message}
      />

      <Input
        className="full"
        labelTitle="Пароль"
        {...register('password', {
          required: { value: true, message: 'Обязательно для заполнения' },
          pattern: { value: /[a-zA-z0-9]/, message: 'Без кириллицы' },
          minLength: { value: 8, message: 'минимум 8 символов' },
        })}
        errorMessage={errors.password?.message}
      />
      <Button type="submit">Войти</Button>
    </form>
  );
};
