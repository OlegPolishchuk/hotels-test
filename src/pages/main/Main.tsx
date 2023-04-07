import React, { ReactElement, useEffect } from 'react';

import { selectCheckIn, selectCheckOut, selectLocation } from 'selectors';

import styles from './Main.module.css';

import {
  Breadcrumbs,
  Favorites,
  Header,
  Hotels,
  SearchForm,
  CustomSlider,
} from 'components';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { formatCheckOut, formatDate } from 'shared/ustils';
import { fetchHotels } from 'store/sagas/hotels/hotels';

export const Main = (): ReactElement => {
  const dispatch = useAppDispatch();

  const location = useAppSelector(selectLocation);
  const checkIn = useAppSelector(selectCheckIn);
  const checkOut = useAppSelector(selectCheckOut);

  const formattedCheckOut = formatCheckOut(checkIn, checkOut);

  useEffect(() => {
    dispatch(fetchHotels({ location, checkIn, checkOut: formattedCheckOut }));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <aside className={`${styles.aside}`}>
          <SearchForm />

          <Favorites />
        </aside>

        <main className={`${styles.mainContent} wrapper`}>
          <div className={styles.header}>
            <Breadcrumbs paths={['Отели', 'Москва']} />
            <time className={styles.time}>{formatDate(checkIn, 'D MMMM YYYY')}</time>
          </div>

          <div className={styles.slider}>
            <CustomSlider />
          </div>

          <Hotels />
        </main>
      </div>
    </div>
  );
};
