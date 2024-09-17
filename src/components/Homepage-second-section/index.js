import React from 'react';
import { useTranslation } from 'react-i18next';
import WaveStudio from '../../assets/images/wave-studio.svg'
import './style.css'
import { useNavigate } from 'react-router-dom';

const SecondSection = () => {
  const { t} = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('#third-section');
    document.getElementById('third-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="wavestudio" className="second-section">
      <div className="wave-studio container small-container">
        <div className='wave-studio-container'>
          <h2 className='white-text'>{t('Wave Studio')}</h2>
          <div className='half-width'>
            <p>{t('waveStudioDescription')}</p>
            <button className="centered-button know-button">{t('See More')}</button>
          </div>
          <img src={WaveStudio} alt={t('waveStudioImageAlt')} />
        </div>
      </div>

      <div className="section-wrapper">
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>DISCOVERY</h2>
            <p>{t('discoveryDescription')}</p>
          </div>
          <button className="know-button">{t('See More')}</button>
        </div>
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>TECH</h2>
            <p>{t('techDescription')}</p>
          </div>
          <button className="know-button" onClick={handleClick}>{t('See More')}</button>
        </div>
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>BUSINESS</h2>
            <p>{t('businessDescription')}</p>
          </div>
          <button className="know-button">{t('See More')}</button>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
