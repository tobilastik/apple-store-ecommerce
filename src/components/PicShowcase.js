import React from 'react';
import Brand1 from '../assets/images/image-1.jpeg';
import Brand2 from '../assets/images/image-2.jpeg';
import Brand3 from '../assets/images/image-3.jpeg';
import Brand4 from '../assets/images/image-4.jpeg';
import Brand5 from '../assets/images/image-5.jpeg';
import Brand6 from '../assets/images/image-6.jpeg';
import Brand7 from '../assets/images/image-7.jpeg';
import Brand8 from '../assets/images/image-8.jpeg';
import Brand9 from '../assets/images/image-9.jpeg';

export default function PicShowcase () {
  return (
    <div className="pic-container">
      <img src={Brand1} alt="Brand" height="150px" width="150px" />
      <img src={Brand2} alt="Brand" height="150px" width="150px" />
      <img src={Brand3} alt="Brand" height="150px" width="150px" />
      <img src={Brand4} alt="Brand" height="150px" width="150px" />
      <img src={Brand5} alt="Brand" height="150px" width="150px" />
      <img src={Brand6} alt="Brand" height="150px" width="150px" />
      <img src={Brand7} alt="Brand" height="150px" width="150px" />
      <img src={Brand8} alt="Brand" height="150px" width="150px" />
      <img src={Brand9} alt="Brand" height="150px" width="150px" />

      <div className="instagram-hover">
        <i className="fa fa-instagram" />
      </div>
    </div>
  );
}
