import React, { useState, useEffect } from "react";
import "./Banner.css"; // Importing the CSS file for custom styles

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]); // Dynamic slides state
  console.log("Slides",slides);
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
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("https://sapthapadhimatrimony.in/backend/app/getGalloticBanner");
        const data = await response.json();
        setSlides(data || []); // Update slides state with fetched data
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);
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
              <img src={`https://sapthapadhimatrimony.in/backend/${slide.imageUrls[0].path}`} alt={`Slide ${index + 1}`} />
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
