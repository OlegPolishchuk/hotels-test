import React, { ReactElement } from 'react';

import { selectFavorites } from 'selectors';

import styles from './Favorites.module.css';

import { HotelCard } from 'components/hotelCard/HotelCard';
import { NothingToShow, SortSwitcher } from 'shared/components';
import { useAppSelector } from 'shared/hooks';

export const Favorites = (): ReactElement => {
  const favoriteHotels = useAppSelector(selectFavorites);

  return (
    <div className={`${styles.wrapper} wrapper`}>
      <h2>Избранное</h2>

      <div className={styles.switcherWrapper}>
        <SortSwitcher isActive title="Рейтинг" callback={() => {}} />
        <SortSwitcher title="Цена" callback={() => {}} />
      </div>

      <div className={styles.hotelsContainer}>
        {favoriteHotels.length === 0 && <NothingToShow title="Ничего нет" />}

        {favoriteHotels.map(hotel => (
          <HotelCard key={hotel.hotelId} hotel={hotel} withIcon={false} />
        ))}
      </div>
    </div>
  );
};
