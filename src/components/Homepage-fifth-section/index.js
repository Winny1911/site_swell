import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'

const FifthSection = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };

  return (
    <div className="fifth-section">
        <h2>FeedBacks</h2>
        <div className="carousel-wrapper blue-background">
          <Slider {...settings}>
            {/* Carousel Items */}
            <div className="carousel-item">
              <h3 className="company-name">Nome, empresa</h3>
              <p>texto aqui</p>
            </div>
            <div className="carousel-item">
              <h3>Nome, empresa</h3>
              <p>texto aqui</p>
            </div>
            <div className="carousel-item">
              <h3>Nome, empresa</h3>
              <p>texto aqui</p>
            </div>
          </Slider>
        </div>
    </div>
  );
}

export default FifthSection;
