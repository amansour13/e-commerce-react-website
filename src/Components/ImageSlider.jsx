import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (                       
    <div className="image-slider" style={{backgroundImage: `url(${images[currentIndex]})`}}>
      <div className="image-slider-controls">
        <button onClick={handlePrevSlide}>&#10094;</button>
        <button onClick={handleNextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
