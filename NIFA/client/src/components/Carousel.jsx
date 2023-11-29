import React, { useState } from 'react';

const Carousel = () => {
const images = [
        'https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg', 
        'https://www.nifafinearts.com/banner-images/1273170038home-banner2.jpg', 
        'https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg',
        'https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg', 
        'https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg'
      ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
