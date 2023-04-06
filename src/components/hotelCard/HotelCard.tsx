import React, { ReactElement } from 'react';

import { selectCheckIn, selectCheckOut, selectFavorites } from 'selectors';

import styles from './HotelCard.module.css';

import hotelIcon from 'assets/icon_hotel.svg';
import { LikeButton, Rating } from 'shared/components';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { formatDate, formatDaysCount } from 'shared/ustils';
import { favoritesActions } from 'store/reducers';
import { Hotel } from 'types';

interface Props {
  hotel: Hotel;
  withIcon?: boolean;
}

export const HotelCard = ({ hotel, withIcon = true }: Props): ReactElement => {
  const { hotelName, stars, priceAvg, hotelId } = hotel;

  const dispatch = useAppDispatch();

  const checkIn = useAppSelector(selectCheckIn);
  const daysCount = useAppSelector(selectCheckOut);
  const favoriteHotels = useAppSelector(selectFavorites);

  const likedState = !!favoriteHotels.find(
    favoriteHotel => hotel.hotelId === favoriteHotel.hotelId,
  );

  const handleToggleFavorite = (): void => {
    const { addHotel, removeHotel } = favoritesActions;

    dispatch(likedState ? removeHotel(hotelId) : addHotel(hotel));
  };

  return (
    <div className={styles.hotel}>
      {withIcon && <img src={hotelIcon} alt="hotel icon" />}
      <div className={styles.description}>
        <div className={styles.header}>
          <h4 className={styles.title}>{hotelName}</h4>
          <LikeButton onClick={handleToggleFavorite} isLike={likedState} />
        </div>
        <p className={styles.date}>
          {formatDate(checkIn, 'D MMMM YYYY')}{' '}
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
