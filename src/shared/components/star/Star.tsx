import React, { ReactElement } from 'react';

import styles from './Star.module.css';

import { StarIcon } from 'shared/components';

interface Props {
  className?: string;
}
export const Star = ({ className }: Props): ReactElement => {
  const finalClassName = `${styles.star} ${className && styles[className]}`;

  return <StarIcon className={finalClassName} />;
};
