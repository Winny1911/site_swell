import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const FirstSection = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="homepage-section">
      <div className="right-div">
        <div className="carousel-wrapper">
          <Slider {...settings}>
            <div className="carousel-item">
              <h3>Item 1 Title</h3>
              <p>Item 1 Description</p>
            </div>
            <div className="carousel-item">
              <h3>Item 2 Title</h3>
              <p>Item 2 Description</p>
            </div>
            <div className="carousel-item">
              <h3>Item 3 Title</h3>
              <p>Item 3 Description</p>
            </div>
          </Slider>
        </div>
      </div>
        <div className="left-div">
          <h2>A Swell</h2>
          <p>Com mais de 20 anos de experiência, cultivamos uma comunidade de talentos diversos, impulsionada pela inovação e dedicada a fornecer soluções personalizadas. Nossa jornada tecnológica é marcada pela contínua evolução, onde cada avanço nos leva mais perto do amanhã.</p>
          <button className="know-button">CONHECER</button>
        </div>
    </div>
  );
}

export default FirstSection;
