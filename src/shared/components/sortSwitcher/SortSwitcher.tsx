import React, { ReactElement } from 'react';

import styles from './SortSwitcher.module.css';

import { FilterOrder } from 'types';

interface Props {
  title: string;
  callback: () => void;
  isActive?: boolean;
  order: FilterOrder;
}
export const SortSwitcher = ({
  title,
  callback,
  order,
  isActive = false,
}: Props): ReactElement => {
  const active = isActive ? `${styles.active} ${styles[order]}` : '';

  const handleClick = (): void => {
    callback();
  };

  return (
    <button
      type="button"
      className={`${styles.switcher} ${active}`}
      onClick={handleClick}
    >
      <span>{title}</span>
      <div className={styles.arrowWrapper}>
        <span className={`${styles.arrow} ${styles.desc}`} />
        <span className={`${styles.arrow} ${styles.asc}`} />
      </div>
    </button>
  );
};
