import React, { ReactElement } from 'react';

import styles from './NotFound.module.css';

export const NotFound = (): ReactElement => {
  return (
    <div className={`${styles.wrapper} wrapper`}>
      <h3>Страница не найдена</h3>
      <h2>404</h2>
    </div>
  );
};
