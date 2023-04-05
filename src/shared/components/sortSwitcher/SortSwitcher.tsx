import React, { ReactElement } from 'react';

import styles from './SortSwitcher.module.css';

export const SortSwitcher = (): ReactElement => {
  return (
    <button type="button" className={styles.switcher}>
      <span>Some text</span>
      <div className={styles.arrowWrapper}>
        <span className={`${styles.arrow} ${styles.active}`} />
        <span className={styles.arrow} />
      </div>
    </button>
  );
};
