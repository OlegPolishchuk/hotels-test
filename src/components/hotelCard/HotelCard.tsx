import React, { ReactElement } from 'react';

import styles from './HotelCard.module.css';

import hotelIcon from 'assets/icon_hotel.svg';
import { LikeButton, Rating } from 'shared/components';
import { Hotel } from 'types';

interface Props {
  hotel: Hotel;
}

export const HotelCard = ({ hotel }: Props): ReactElement => {
  const { hotelName, stars, priceAvg } = hotel;

  return (
    <div className={styles.hotel}>
      <img src={hotelIcon} alt="hotel icon" />
      <div className={styles.description}>
        <div className={styles.header}>
          <h4 className={styles.title}>{hotelName}</h4>
          <LikeButton />
        </div>
        <p className={styles.date}>
          7 июля 2020 <span>- день</span>
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
