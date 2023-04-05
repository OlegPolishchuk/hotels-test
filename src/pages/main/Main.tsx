import React, { ReactElement } from 'react';

import styles from './Main.module.css';

import { Header, SearchForm } from 'components';
import { SortSwitcher } from 'shared/components';

export const Main = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <aside className={`${styles.aside}`}>
          <SearchForm />

          <form className="wrapper">
            <h2>Избранное</h2>

            <SortSwitcher />
          </form>
        </aside>
      </div>
      <main />
    </div>
  );
};
