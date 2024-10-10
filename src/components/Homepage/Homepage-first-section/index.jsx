import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ReactComponent as CarrouselCard} from '../../../assets/images/payments-2.svg';
import './style.css';

const FirstSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

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
        <div className='carousel-div'>
          <Slider {...settings}>
            <div className="carousel-item cursor-pointer" onClick={handleClick}>
              <CarrouselCard className="rounded-[15px]" alt="card informando sobre pagamentos" />
            </div>
          </Slider>
        </div>
      </div>
        <div className="left-div">
          <h2>{t('swell_title')}</h2>
          <p className='lg:w-[400px]'>{t('swell_description')}</p>
          <button className="know-button" onClick={handleClick}>
            {t('know_button')}
          </button>
        </div>
    </div>
  );
}

export default FirstSection;
