import React, { ReactElement } from 'react';

import { selectFavorites } from 'selectors';

import styles from './FavoritedCount.module.css';

import { useAppSelector } from 'shared/hooks';
import { getCorrectHotelsWord } from 'shared/ustils';

export const FavoritesCount = (): ReactElement => {
  const favorites = useAppSelector(selectFavorites);
  const count = favorites.length;
  const correctHotelsEnding = getCorrectHotelsWord(count);

  return (
    <span>
      Добавлено в Избранное: <span className={styles.hotelCount}>{count}</span>{' '}
      {correctHotelsEnding}
    </span>
  );
};
