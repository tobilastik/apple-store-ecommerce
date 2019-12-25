import React, {Children} from 'react';
import Slide from '../assets/images/slider.jpg';

export default function Slider({children, slider}) {
  return (
    <header className={slider}>
      {children}
    </header>
  );
}

Slider.defaultProps = {
  slider: 'sliderHero',
};
