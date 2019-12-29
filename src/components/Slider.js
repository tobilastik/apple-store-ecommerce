import React from 'react';

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
