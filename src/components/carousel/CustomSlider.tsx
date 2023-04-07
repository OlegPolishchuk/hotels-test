import React, { ReactElement } from 'react';

import 'pure-react-carousel/dist/react-carousel.es.css';

import Carousel, { ScrollMode } from 'nuka-carousel';

import styles from './Carousel.module.css';

export const CustomSlider = (): ReactElement => {
  return (
    <div className={styles.slider}>
      <Carousel
        autoplay
        wrapAround
        slidesToShow={3}
        scrollMode={'remainder' as ScrollMode}
        withoutControls
      >
        <img src="src/assets/slide_1.jpg" alt="slider 1" />
        <img src="src/assets/slide_2.jpg" alt="slider 2" />
        <img src="src/assets/slide_3.jpg" alt="slider 3" />
        <img src="src/assets/slide_4.jpg" alt="slider 4" />
        <img src="src/assets/slide_1.jpg" alt="slider 1" />
        <img src="src/assets/slide_2.jpg" alt="slider 2" />
        <img src="src/assets/slide_3.jpg" alt="slider 3" />
        <img src="src/assets/slide_4.jpg" alt="slider 4" />
      </Carousel>
    </div>
  );
};
