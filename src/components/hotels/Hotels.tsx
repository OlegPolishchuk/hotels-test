import React, { ReactElement } from 'react';

import styles from './Hotels.module.css';

import { HotelCard } from 'components/hotelCard/HotelCard';

export const Hotels = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.addedToFavorites}>
        Добавлено в Избранное: <span className={styles.hotelCount}>0</span> отелей
      </p>
      <HotelCard />
    </div>
  );
};
