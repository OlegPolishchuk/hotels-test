import React, { Fragment, ReactElement } from 'react';

import styles from './Breadcrumbs.module.css';

interface Props {
  paths: string[];
}
export const Breadcrumbs = ({ paths }: Props): ReactElement => {
  return (
    <h2>
      {paths.map(path => (
        <Fragment key={path}>
          <span>{path}</span>

          <span className={styles.arrow}> &#62; </span>
        </Fragment>
      ))}
    </h2>
  );
};
