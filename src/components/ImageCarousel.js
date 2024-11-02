// src/components/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container fade-in">
      <Slider {...settings}>
        <div>
          <img src="https://img.freepik.com/free-photo/blue-flower-close-up-nature-organic-pattern-generative-ai_188544-12650.jpg" alt="Research Slide 1" />
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/ea/44/14/ea441419d3353b6414666410d8288e4f.jpg" alt="Research Slide 2" />
        </div>
        <div>
          <img src="https://img.freepik.com/premium-photo/vibrant-abstract-illustration-featuring-variety-colorful-shapes-textures_1232903-21049.jpg?semt=ais_hybrid" alt="Research Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
