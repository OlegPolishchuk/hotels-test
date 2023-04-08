import React, { ReactElement, useCallback, useMemo } from 'react';

import { selectFavorites } from 'selectors';

import styles from './HotelCard.module.css';

import { HotelIcon, LikeButton, Rating } from 'shared/components';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { formatDate, formatDaysCount } from 'shared/ustils';
import { favoritesActions } from 'store/reducers';
import { FavoriteHotel, Hotel } from 'types';

interface Props {
  hotel: Hotel | FavoriteHotel;
  checkIn: string;
  daysCount: string;
  withIcon?: boolean;
}

export const HotelCard = ({
  hotel,
  checkIn,
  daysCount,
  withIcon = true,
}: Props): ReactElement => {
  const { hotelName, stars, priceAvg } = hotel;

  const dispatch = useAppDispatch();

  const favoriteHotels = useAppSelector(selectFavorites);

  const likedState = useMemo(
    () =>
      !!favoriteHotels.find(
        favoriteHotel =>
          hotel.hotelId === favoriteHotel.hotelId &&
          checkIn === favoriteHotel.checkIn &&
          daysCount === favoriteHotel.daysCount,
      ),
    [hotel.hotelId, checkIn, daysCount, favoriteHotels],
  );

  const handleToggleFavorite = useCallback((): void => {
    const { addHotel, removeHotel } = favoritesActions;

    const favoriteHotel: FavoriteHotel = {
      ...hotel,
      checkIn,
      daysCount,
    };

    dispatch(likedState ? removeHotel(favoriteHotel) : addHotel(favoriteHotel));
  }, [likedState]);

  return (
    <div className={styles.hotel}>
      {withIcon && <HotelIcon />}

      <div className={styles.description}>
        <div className={styles.header}>
          <h4 className={styles.title}>{hotelName}</h4>
          <LikeButton onClick={handleToggleFavorite} isLike={likedState} />
        </div>

        <p className={styles.date}>
          {formatDate(checkIn, 'D MMMM YYYY')}
          <span>
            - {daysCount} {formatDaysCount(+daysCount)}
          </span>
        </p>

        <div className={styles.footer}>
          <div>
            <Rating rating={stars} />
          </div>

          <div className={styles.priceWrapper}>
            Price: <span className={styles.price}>{priceAvg.toFixed(0)} &#8381;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
