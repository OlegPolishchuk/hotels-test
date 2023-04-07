import React, { ReactElement } from 'react';

import { selectCheckIn, selectCheckOut, selectHotels } from 'selectors';

import styles from './Hotels.module.css';

import { FavoritesCount } from 'components/favoritesCount/FavoritesCount';
import { HotelCard } from 'components/hotelCard/HotelCard';
import { NothingToShow } from 'shared/components';
import { useAppSelector } from 'shared/hooks';

export const Hotels = (): ReactElement => {
  const hotels = useAppSelector(selectHotels);
  const checkIn = useAppSelector(selectCheckIn);
  const checkOut = useAppSelector(selectCheckOut);

  return (
    <div className={styles.wrapper}>
      <p className={styles.addedToFavorites}>
        <FavoritesCount />
      </p>

      <div className={styles.container}>
        {hotels.length === 0 && (
          <NothingToShow title="По вашему запросу ничего не найдено" />
        )}
        {hotels.map(hotel => (
          <HotelCard
            key={hotel.hotelId}
            hotel={hotel}
            checkIn={checkIn}
            daysCount={checkOut}
          />
        ))}
      </div>
    </div>
  );
};
