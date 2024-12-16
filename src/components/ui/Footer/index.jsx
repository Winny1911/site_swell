import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LogoFooter from '../../../assets/images/logo-footer.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './style.css'

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <footer>
      <div className="flex flex-col md:flex-row gap-4 lg:justify-around terms-and-socials">
        <div className="md:col-4">
          <img src={LogoFooter} alt="Logo" className='w-100' />
        </div>
        <div className="md:col-4 d-flex justify-content-center pt-lg">
          <ul className='list-hk-darkblue small-screen'>
            <div>
              <li><Link to="/" onClick={handleHomeClick}>{t('Home')}</Link></li>
              <li><Link to="/about" >{t('A Swell')}</Link></li>
              <li><Link to="/wave">{t('Wave Studio')}</Link></li>
            </div>
            <div>
              <li><Link to="/payments">{t('Wave Payments')}</Link></li>
              <li><Link to="https://intranet.swellitsolutions.com.br/">{t('Login')}</Link></li>
            </div>
          </ul>
        </div>
        <div className="md:col-4 pt-lg no-margin">
            <div>
                <p className='font-color'>{t('RUA')} APÓSTOLOS, 82 - SL402</p>
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
          <div className='flex flex-col' style={{ fontSize: '12px', textAlign: 'left' }}>
          <p className='mb-1'>Copyright © Swell IT Solutions</p>
          <p>2024</p>
          </div>
          <a className="text-white text-size-12" href="/politica_privacidade.html" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12ax' }}>{t('privPol')}</a>
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
    </footer>
  );
}

export default Footer;
