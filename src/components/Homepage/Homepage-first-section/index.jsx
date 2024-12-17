import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import {ReactComponent as CarrouselCardPt} from '../../../assets/images/home/paymentsCard-pt.svg';
// import {ReactComponent as CarrouselCardEn} from '../../../assets/images/home/paymentsCard-en.svg';
// import {ReactComponent as CarrouselCardEs} from '../../../assets/images/home/paymentsCard-es.svg';
// import {ReactComponent as CarrouselCardJp} from '../../../assets/images/home/paymentsCard-jp.svg';
import CarrouselCardPt from '../../../assets/images/home/paymentsCard-pt.svg';
import CarrouselCardEn from '../../../assets/images/home/paymentsCard-en.svg';
import CarrouselCardEs from '../../../assets/images/home/paymentsCard-es.svg';
// import CarrouselCardJp from '../../../assets/images/home/paymentsCard-jp.svg';
import './style.css';

const FirstSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  const handleClickPayments = () => {
    navigate('/payments');
  };

  const getImageForLanguage = (language) => {
    switch (language) {
      case 'en':
        return CarrouselCardEn;
      case 'es':
        return CarrouselCardEs;
      case 'pt':
      default:
        return CarrouselCardPt;
    }
  };

  // Descomentar quando o slide voltar a funcionar
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <div className="homepage-section">
      <div className="right-div">
        <div className='carousel-div'>
          {/* Usar o item abaixo quando o carrousel ganhar mais imagens */}
          {/* <Slider {...settings}>
            <div className="carousel-item cursor-pointer" onClick={handleClickPayments}>
              <CarrouselCard className="rounded-[15px]" alt="card informando sobre pagamentos" />
            </div>
          </Slider> */}
          <img
                src={getImageForLanguage(i18n.language)}
                onClick={handleClickPayments}
                className="cursor-pointer rounded-[15px]"
                alt="swell-flux"
            />
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
