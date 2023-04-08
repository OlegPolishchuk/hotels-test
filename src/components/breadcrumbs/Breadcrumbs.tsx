import React, { Fragment, ReactElement } from 'react';

import styles from './Breadcrumbs.module.css';

import { VectorRightIcon } from 'shared/components';

interface Props {
  paths: string[];
}
export const Breadcrumbs = ({ paths }: Props): ReactElement => {
  return (
    <h2>
      {paths.map(path => (
        <Fragment key={path}>
          <span>{path}</span>

          <span className={styles.arrow}>
            <VectorRightIcon />
          </span>
        </Fragment>
      ))}
    </h2>
  );
};
