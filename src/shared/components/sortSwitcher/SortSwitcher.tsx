import React, { ReactElement } from 'react';

import styles from './SortSwitcher.module.css';

interface Props {
  title: string;
  callback: () => void;
  isActive?: boolean;
}
export const SortSwitcher = ({
  title,
  callback,
  isActive = false,
}: Props): ReactElement => {
  const active = isActive ? styles.active : '';
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
        <span className={`${styles.arrow} ${active}`} />
        <span className={styles.arrow} />
      </div>
    </button>
  );
};
