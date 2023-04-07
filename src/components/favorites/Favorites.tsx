import React, { ReactElement, useMemo, useState } from 'react';

import { selectFavorites } from 'selectors';

import styles from './Favorites.module.css';

import { HotelCard } from 'components/hotelCard/HotelCard';
import { NothingToShow, SortSwitcher } from 'shared/components';
import { useAppSelector } from 'shared/hooks';
import { FavoriteHotel, FilterValue, HotelsFilter } from 'types';

export const Favorites = (): ReactElement => {
  const favoriteHotels = useAppSelector(selectFavorites);

  const [filter, setFilter] = useState<HotelsFilter>({
    order: 'asc',
    value: null,
  });

  const isActiveSwitchButton = (value: FilterValue): boolean => filter.value === value;

  const handleSwitchFilter = (value: FilterValue): void => {
    setFilter(prevState => ({
      order: prevState.order === 'asc' ? 'desc' : 'asc',
      value,
    }));
  };

  const filteredHotels: FavoriteHotel[] = useMemo(() => {
    if (filter.value) {
      return [...favoriteHotels].sort((a, b) => {
        const priceDiff = a.priceAvg - b.priceAvg;
        const ratingDiff = a.stars - b.stars;
        const diff = filter.value === 'price' ? priceDiff : ratingDiff;

        return filter.order === 'desc' ? diff : -diff;
      });
    }

    return favoriteHotels;
  }, [filter, favoriteHotels]);

  return (
    <div className={`${styles.wrapper} wrapper`}>
      <h2>Избранное</h2>

      <div className={styles.switcherWrapper}>
        <SortSwitcher
          isActive={isActiveSwitchButton('rating')}
          title="Рейтинг"
          order={filter.order}
          callback={() => handleSwitchFilter('rating')}
        />
        <SortSwitcher
          isActive={isActiveSwitchButton('price')}
          order={filter.order}
          title="Цена"
          callback={() => handleSwitchFilter('price')}
        />
      </div>

      <div className={styles.hotelsContainer}>
        {filteredHotels.length === 0 && <NothingToShow title="Ничего нет" />}

        {filteredHotels.map(hotel => (
          <HotelCard
            key={`${hotel.hotelId}_${hotel.priceAvg}`}
            hotel={hotel}
            checkIn={hotel.checkIn}
            daysCount={hotel.daysCount}
            withIcon={false}
          />
        ))}
      </div>
    </div>
  );
};
