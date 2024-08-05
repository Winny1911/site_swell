import React from 'react';
import { Link } from 'react-router-dom';
import LogoFooter from '../../assets/images/logo-footer.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className="row terms-and-socials">
        <div className="col-4">
          <img src={LogoFooter} alt="Logo" className='w-100' />
        </div>
        <div className="col-4 d-flex justify-content-center pt-lg">
          <ul className='list-hk-darkblue small-screen'>
            <div>
              <li><a href="#">Início</a></li>
              <li><a href="#">A Swell</a></li>
              <li><a href="#">Wave Studio</a></li>
              <li><a href="#">Wave AI</a></li>
            </div>
            <div>
              <li><a href="#">Wave Payments</a></li>
              <li><a href="#">Cases Swell</a></li>
              <li><a href="#">Perfil</a></li>
            </div>
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
              <Link to="/carreira">Carreiras Swell</Link>
            </div>
        </div>
      </div>
      <hr style={{ borderTop: '2px solid white' }} />
      <div className="row terms-and-socials">
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
