import React, { useState, useEffect } from "react";
import "./Banner.css"; // Importing the CSS file for custom styles

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "../banner/banner.jpg",
     
    },
    {
      img: "../banner/banner.jpg",
      
    },
    {
      img: "../banner/banner.jpg",
      
    },
  ];

  const totalSlides = slides.length;

  // Function to change slide
  const changeSlide = (direction) => {
    setCurrentSlide((prevSlide) => {
      let newSlide = prevSlide + direction;
      if (newSlide < 0) newSlide = totalSlides - 1;
      if (newSlide >= totalSlides) newSlide = 0;
      return newSlide;
    });
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="banner-section">
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.img} alt={`Slide ${index + 1}`} />
              <div className="content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <button className="prev" onClick={() => changeSlide(-1)}>
          ❮
        </button>
        <button className="next" onClick={() => changeSlide(1)}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
