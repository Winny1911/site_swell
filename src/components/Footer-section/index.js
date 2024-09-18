import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LogoFooter from '../../assets/images/logo-footer.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './style.css'

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('wavestudio').scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };
  
  return (
    <footer>
      <div className="row terms-and-socials">
        <div className="col-4">
          <img src={LogoFooter} alt="Logo" className='w-100' />
        </div>
        <div className="col-4 d-flex justify-content-center pt-lg">
          <ul className='list-hk-darkblue small-screen'>
            <div>
              <li><Link to="/">{t('Home')}</Link></li>
              <li><Link to="/about#aswell" >{t('A Swell')}</Link></li>
              <li><Link to="/" onClick={handleClick}>{t('Wave Studio')}</Link></li>
            </div>
            <div>
              <li><Link to="/payments">{t('Wave Payments')}</Link></li>
              <li><Link to="#">{t('Perfil')}</Link></li>
            </div>
          </ul>
        </div>
        <div className="col-4 pt-lg no-margin">
            <div>
                <p className='font-color'>RUA APÓSTOLOS, 82 - SL402</p>
                <p className='font-color'>PALHOÇA - SANTA CATARINA</p>
            </div>
            <div className="pt-lg">
              <p className='font-color'>{t('Procuramos pessoas talentosas e')}</p>
              <p className='font-color'>{t('apaixonadas para se juntar à equipe.')}</p>
              <Link to="/carreira" className='list-hk-darkblue'>{t('Carreiras Swell')}</Link>
            </div>
        </div>
      </div>
      <hr style={{ borderTop: '2px solid white' }} />
      <div className="row terms-and-socials">
        <div className="col-6 d-flex gap-6 font-color">
          <a className="text-white text-size-12" href="/politica_privacidade.html" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12ax' }}>{t('privPol')}</a>
          <p className='text-size-12'>{t('cookiesPol')}</p>
        </div>
        <div className="col-6 icon-color font-color padding-right" style={{ textAlign: 'right' }}>
          <a className="text-white" href="https://www.instagram.com/swellitsolutions/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a className="text-white" href="https://www.linkedin.com/company/swellitsolutions/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a className="text-white" href="https://www.facebook.com/SwellItSolutions/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </div>
      </div>
      <div className="row font-color">
        <p style={{ fontSize: '12px', textAlign: 'left' }}>Copyright © Swell IT Solutions 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
