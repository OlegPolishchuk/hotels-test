import React, { ReactElement } from 'react';

import { useForm } from 'react-hook-form';

import styles from './Login.module.css';

import { Button, Input } from 'shared/components';

const MAIN_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

interface FormData {
  login: string;
  password: string;
}
export const Login = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h2 className={styles.title}>Simple Hotel Check</h2>
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
      </div>
    </div>
  );
};
