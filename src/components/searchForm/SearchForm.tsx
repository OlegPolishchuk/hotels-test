import React, { ReactElement } from 'react';

import { useForm } from 'react-hook-form';

import styles from './SearchForm.module.css';

import { Button, Input } from 'shared/components';
import { SearchFormData } from 'types';

export const SearchForm = (): ReactElement => {
  const { register } = useForm<SearchFormData>();

  return (
    <form className={`${styles.form} wrapper`}>
      <Input
        className="full"
        labelTitle="Локация"
        {...register('location', { required: 'Обязательное поле' })}
      />

      <Input
        className="full"
        labelTitle="Дата заселения"
        type="date"
        {...register('date', { required: 'Обязательное поле' })}
      />

      <Input
        className="full"
        labelTitle="Количество дней"
        type="number"
        {...register('daysNumber', { required: 'Минимум 1 день', min: 1 })}
      />

      <Button>Найти</Button>
    </form>
  );
};
