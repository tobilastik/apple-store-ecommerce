import React from 'react';
import Brand1 from '../assets/images/brand-1.png';
import Brand2 from '../assets/images/brand-2.png';
import Brand3 from '../assets/images/brand-3.png';
import Brand4 from '../assets/images/brand-4.png';
import Brand5 from '../assets/images/brand-5.png';
import Brand6 from '../assets/images/brand-6.png';

export default function Brand () {
  return (
    <div className="brand-container">
      <img src={Brand1} alt="Brand" />
      <img src={Brand2} alt="Brand" />
      <img src={Brand3} alt="Brand" />
      <img src={Brand4} alt="Brand" />
      <img src={Brand5} alt="Brand" />
      <img src={Brand6} alt="Brand" />
    </div>
  );
}
