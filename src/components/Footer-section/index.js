import React from 'react';
import LogoFooter from '../../assets/images/logo-footer.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-4">
          <img src={LogoFooter} alt="Logo" className='w-100' />
        </div>
        <div className="col-4 d-flex justify-content-center pt-lg">
          <ul className='list-hk-darkblue'>
            <li><a href="#">Início</a></li>
            <li><a href="#">A Swell</a></li>
            <li><a href="#">Wave Stúdio</a></li>
            <li><a href="#">Soluções e Cases</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">Feedbacks</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="col-4 pt-lg no-margin">
            <div>
                <p className='font-color'>RUA APÓSTOLOS, 82 - SL402</p>
                <p className='font-color'>PALHOÇA - SANTA CATARINA</p>
            </div>
            <div className="pt-lg">
                <p className='font-color'>Procuramos pessoas talentosas e</p>
                <p className='font-color'>apaixonadas para se juntar à equipe.</p>
                <p>Carreiras Swell</p>
            </div>
        </div>
      </div>
      <hr style={{ borderTop: '2px solid white' }} />
      <div className="row">
        <div className="col-6 d-flex gap-6 font-color">
          <p style={{ fontSize: '12px' }}>Política de Privacidade</p>
          <p style={{ fontSize: '12px' }}>Termos e Condições</p>
          <p style={{ fontSize: '12px' }}>Política de Cookies</p>
        </div>
        <div className="col-6 icon-color font-color padding-right" style={{ textAlign: 'right' }}>
        <FontAwesomeIcon icon={faInstagram} size="lg" />
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </div>
      </div>
      <div className="row font-color">
        <p style={{ fontSize: '12px', textAlign: 'left' }}>Copyright © Swell IT Solutions 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
