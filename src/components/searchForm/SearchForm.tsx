import React, { ReactElement } from 'react';

import { useForm } from 'react-hook-form';
import { selectCheckIn, selectCheckOut, selectLocation } from 'selectors';

import styles from './SearchForm.module.css';

import { Button, Input } from 'shared/components';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { formatCheckOut } from 'shared/ustils';
import { filterActions } from 'store/reducers';
import { fetchHotels } from 'store/sagas/hotels/hotels';
import { RequestParams, SearchFormData } from 'types';

export const SearchForm = (): ReactElement => {
  const dispatch = useAppDispatch();

  const location = useAppSelector(selectLocation);
  const checkIn = useAppSelector(selectCheckIn);
  const checkOut = useAppSelector(selectCheckOut);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({ mode: 'onBlur' });

  const onSubmit = handleSubmit(data => {
    const { location, date, daysNumber } = data;

    const updatedData: RequestParams = {
      location,
      checkIn: date,
      checkOut: formatCheckOut(date, `${daysNumber}`),
    };

    dispatch(filterActions.setFilter({ ...updatedData, checkOut: `${data.daysNumber}` }));
    dispatch(fetchHotels(updatedData));
  });

  return (
    <form className={`${styles.form} wrapper`} onSubmit={onSubmit}>
      <Input
        className="full"
        labelTitle="Локация"
        defaultValue={location}
        {...register('location', { required: 'Обязательное поле' })}
        errorMessage={errors.location?.message}
      />

      <Input
        className="full"
        labelTitle="Дата заселения"
        type="date"
        defaultValue={checkIn}
        {...register('date', { required: 'Обязательное поле' })}
        errorMessage={errors.date?.message}
      />

      <Input
        className="full"
        labelTitle="Количество дней"
        type="number"
        defaultValue={checkOut}
        {...register('daysNumber', {
          required: {
            value: true,
            message: 'Минимум 1 день',
          },
          min: {
            value: 1,
            message: 'Минимум 1 день',
          },
        })}
        errorMessage={errors.daysNumber?.message}
      />

      <Button type="submit">Найти</Button>
    </form>
  );
};
