import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
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
        <h2 className='blue-title align-self-right'>FeedBacks</h2>
        <div className="carousel-wrapper feedback-wrap blue-background">
          <Slider {...settings}>
            {/* Carousel Items */}
            <div className="carousel-item feedback">
              <h4 className="company-name">Marcel Fogaça, Pentare - Gestor de Projetos</h4>
              <p className='company-testemony'>"Fiquei impressionado com o profissionalismo e rapidez com que o sistema foi entregue. 
                Simplesmente fantástico, do primeiro contato até a conclusão do trabalho equipe prestou toda assessoria, 
                foram extremamente atenciosos e prestativos. Recomendo o trabalho e com certeza indicarei aos amigos"</p>
            <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
            </div>
            {/* <div className="carousel-item">
              <h3>Nome, empresa</h3>
              <p>texto aqui</p>
            </div>
            <div className="carousel-item">
              <h3>Nome, empresa</h3>
              <p>texto aqui</p>
            </div> */}
          </Slider>
        </div>
    </div>
  );
}

export default FifthSection;
