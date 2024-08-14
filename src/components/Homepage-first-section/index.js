import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarrouselCard1 from '../../assets/images/payments-card.svg'
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
            <div className="carousel-item carousel-description">
              <img className="m0-auto" src={CarrouselCard1} />
            </div>
            <div className="carousel-item carousel-description">
              <h3>Item 2 Title</h3>
              <p>Item 2 Description</p>
            </div>
            <div className="carousel-item carousel-description">
              <h3>Item 3 Title</h3>
              <p>Item 3 Description</p>
            </div>
          </Slider>
        </div>
      </div>
        <div className="left-div">
          <h2>{t('swell_title')}</h2>
          <p>{t('swell_description')}</p>
          <button className="know-button">{t('know_button')}</button>
        </div>
    </div>
  );
}

export default FirstSection;
