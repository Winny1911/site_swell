import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';
import logo from '../../../assets/images/logo.png';
import whiteLogo from '../../../assets/images/white-logo.png';
import openMenuIcon from '../../../assets/images/icons/menu-blue-icon.png';
import closedMenuIcon from '../../../assets/images/icons/menu-black-icon.png';
import openLanguageIcon from '../../../assets/images/icons/language-blue-icon.png';
import closedLanguageIcon from '../../../assets/images/icons/language-black-icon.png';
import ptFlag from '../../../assets/images/flags/brasil-flag.svg';
import enFlag from '../../../assets/images/flags/usa-flag.svg';
import esFlag from '../../../assets/images/flags/spain-flag.svg';
import jpFlag from '../../../assets/images/flags/japan-flag.svg';
import WhatsAppLink from '../Whatsapp-link';

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (languageMenuOpen) {
      setLanguageMenuOpen(false);
    }
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleHomepageClick = (e) => {
    e.preventDefault();
    navigate('/'); 
  };

  const currentLogo = (location.pathname === '/payments' || location.pathname === '/carreira' || location.pathname === '/wave') ? whiteLogo : logo;
  const logoClassName = (location.pathname === '/payments' || location.pathname === '/carreira' || location.pathname === '/wave') ? 'white-logo' : 'default-logo';

  return (
    <div className={`nav-menu ${menuOpen ? 'menu-open' : ''}`}>
      <img src={currentLogo} onClick={handleHomepageClick} className={`icons ${logoClassName}`} alt="Logo" />

      <div className={`menu-icons ${menuOpen ? 'menu-open' : ''}`}>
        <div onClick={toggleMenu} className={`visibility-toggle ${languageMenuOpen ? 'hidden' : ''}`}>
            <WhatsAppLink />
        </div>

        <div onClick={toggleLanguageMenu} className={`language-menu-trigger ${languageMenuOpen ? 'move-left' : ''}`}>
          <img src={languageMenuOpen ? openLanguageIcon : closedLanguageIcon} className="icons" alt="Language menu icon" />
        </div>

        <div onClick={toggleMenu} className={`visibility-toggle ${languageMenuOpen ? 'hidden' : ''}`}>
          <img src={menuOpen ? openMenuIcon : closedMenuIcon} className="icons" alt="Menu icon" />
        </div>
      </div>

      <div className={`language-menu-container ${languageMenuOpen ? 'show' : ''}`}>
        <ul>
          <li onClick={() => changeLanguage('pt')}><img src={ptFlag} alt="PT" /> PT</li>
          <li onClick={() => changeLanguage('en')}><img src={enFlag} alt="EN" /> EN</li>
          <li onClick={() => changeLanguage('es')}><img src={esFlag} alt="ES" /> ES</li>
          <li onClick={() => changeLanguage('jp')}><img src={jpFlag} alt="JP" /> JP</li>
        </ul>
      </div>

      <div className={`side-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">{t('Home')}</Link></li>
          <li><Link to="/about">{t('A Swell')}</Link></li>
          <li><Link to="/wave">{t('Wave Studio')}</Link></li>
          <li><Link to="/payments">{t('Wave Payments')}</Link></li>
          <li><Link to="/carreira">{t('Carreiras Swell')}</Link></li>
          <li><Link to="#">{t('Login')}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
