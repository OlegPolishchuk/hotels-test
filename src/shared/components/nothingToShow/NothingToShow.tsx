import React, { ReactElement, ReactNode } from 'react';

import styles from './NothingToShow.module.css';

interface Props {
  children?: ReactNode;
  title?: string;
}

export const NothingToShow = ({ children, title }: Props): ReactElement => {
  return (
    <h4 className={styles.title}>
      {title && title}
      {children && children}
    </h4>
  );
};
