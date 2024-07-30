import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/images/logo.png';
import openMenuIcon from '../../assets/images/menu-blue-icon.png';
import closedMenuIcon from '../../assets/images/menu-black-icon.png';
import openLanguageIcon from '../../assets/images/language-blue-icon.png';
import closedLanguageIcon from '../../assets/images/language-black-icon.png';
import ptFlag from '../../assets/images/brasil-flag.svg'; // Add your flag images
import enFlag from '../../assets/images/usa-flag.svg';
import esFlag from '../../assets/images/spain-flag.svg';
import jpFlag from '../../assets/images/japan-flag.svg';

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

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

  return (
    <div className={`nav-menu ${menuOpen ? 'menu-open' : ''}`}>
      <img src={logo} className="icons" alt="Logo" />

      <div className={`menu-icons ${menuOpen ? 'menu-open' : ''}`}>
        <div onClick={toggleLanguageMenu} className={`language-menu-trigger ${languageMenuOpen ? 'move-left' : ''}`}>
          <img src={languageMenuOpen ? openLanguageIcon : closedLanguageIcon} className="icons" alt="Language menu icon" />
        </div>

        <div onClick={toggleMenu} className={`visibility-toggle ${languageMenuOpen ? 'hidden' : ''}`}>
          <img src={menuOpen ? openMenuIcon : closedMenuIcon} className="icons" alt="Menu icon" />
        </div>
      </div>

      <div className={`language-menu-container ${languageMenuOpen ? 'show' : ''}`}>
        <ul>
          <li><img src={ptFlag} alt="PT" /> <a href="#pt">PT</a></li>
          <li><img src={enFlag} alt="EN" /> <a href="#en">EN</a></li>
          <li><img src={esFlag} alt="ES" /> <a href="#es">ES</a></li>
          <li><img src={jpFlag} alt="JP" /> <a href="#jp">JP</a></li>
        </ul>
      </div>

      <div className={`side-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><Link to="/about">A Swell</Link></li>
          <li><a href="#wavestudio">Wave Studio</a></li>
          <li><a href="#cases">Cases</a></li>
          <li><a href="#paymenthub">Payment Hub</a></li>
          <li><a href="#perfil">Perfil</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
