import React, { ReactElement } from 'react';

import styles from './Slider.module.css';

export const Slider = (): ReactElement => {
  return (
    <div className={styles.slider}>
      <img src="src/assets/slide_1.jpg" alt="slider 1" />
      <img src="src/assets/slide_3.jpg" alt="slider 2" />
      <img src="src/assets/slide_3.jpg" alt="slider 3" />
    </div>
  );
};
