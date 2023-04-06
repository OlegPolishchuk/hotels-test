import React, { ReactElement } from 'react';

import styles from './Main.module.css';

import { Breadcrumbs, Header, Hotels, SearchForm, Slider } from 'components';
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

            <div>
              <SortSwitcher isActive title="Рейтинг" callback={() => {}} />
              <SortSwitcher title="Цена" callback={() => {}} />
            </div>
          </form>
        </aside>

        <main className={`${styles.mainContent} wrapper`}>
          <div className={styles.header}>
            <Breadcrumbs paths={['Отели', 'Москва']} />
            <time className={styles.time}>7 Июля 2020</time>
          </div>

          <div className={styles.slider}>
            <Slider />
          </div>

          <div className={styles.hotels}>
            <Hotels />
          </div>
        </main>
      </div>
    </div>
  );
};
