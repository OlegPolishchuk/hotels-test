import React, { ReactElement } from 'react';

import { selectHotels } from 'selectors';

import styles from './Hotels.module.css';

import { HotelCard } from 'components/hotelCard/HotelCard';
import { useAppSelector } from 'shared/hooks';

export const Hotels = (): ReactElement => {
  const hotels = useAppSelector(selectHotels);

  return (
    <div className={styles.wrapper}>
      <p className={styles.addedToFavorites}>
        Добавлено в Избранное: <span className={styles.hotelCount}>0</span> отелей
      </p>
      <div className={styles.container}>
        {hotels.map(hotel => (
          <HotelCard key={hotel.hotelId} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
