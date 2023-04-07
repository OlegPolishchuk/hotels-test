import React, { ReactElement } from 'react';

import Carousel from 'nuka-carousel';

import styles from './Carousel.module.css';

export const CustomSlider = (): ReactElement => {
  return (
    <div className={styles.slider}>
      <Carousel slidesToShow={3} renderBottomCenterControls={() => null}>
        <img src="/carousel/slide_1.jpg" alt="slider 1" />
        <img src="/carousel/slide_2.jpg" alt="slider 2" />
        <img src="/carousel/slide_3.jpg" alt="slider 3" />
        <img src="/carousel/slide_4.jpg" alt="slider 4" />
        <img src="/carousel/slide_1.jpg" alt="slider 1" />
        <img src="/carousel/slide_2.jpg" alt="slider 2" />
        <img src="/carousel/slide_3.jpg" alt="slider 3" />
        <img src="/carousel/slide_4.jpg" alt="slider 4" />
      </Carousel>
    </div>
  );
};
