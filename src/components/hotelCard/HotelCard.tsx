import React, { ReactElement } from 'react';

import styles from './HotelCard.module.css';

import hotelIcon from 'assets/icon_hotel.svg';
import { LikeButton, Rating } from 'shared/components';

export const HotelCard = (): ReactElement => {
  return (
    <div className={styles.hotel}>
      <img src={hotelIcon} alt="hotel icon" />
      <div className={styles.description}>
        <div className={styles.header}>
          <h4 className={styles.title}>Moscow Marriott Grand Hotel</h4>
          <LikeButton />
        </div>
        <p className={styles.date}>
          7 июля 2020 <span>- день</span>
        </p>

        <div className={styles.footer}>
          <div>
            <Rating rating={5} />
          </div>

          <div className={styles.price}>
            Price: <span className={styles.price_bold}> 23 924</span>
          </div>
        </div>
      </div>
    </div>
  );
};
