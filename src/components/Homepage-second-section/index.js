import React from 'react';
import { useTranslation } from 'react-i18next';
import WaveStudio from '../../assets/images/wave-studio.jpg'
import './style.css'

const SecondSection = () => {
  const { t} = useTranslation();

  return (
    <div className="second-section">
      <div className="wave-studio container small-container">
        <h2 className='blue-title'>Wave Studio</h2>
        <div className='wave-studio-container'>
          <div className='half-width'>
            <p>{t('waveStudioDescription')}</p>
            <button className="centered-button know-button">{t('See More')}</button>
          </div>
          <div>
            <img src={WaveStudio} alt={t('waveStudioImageAlt')} />
          </div>
        </div>
      </div>

      <div className="section-wrapper">
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>DISCOVERY</h2>
            <p>{t('discoveryDescription')}</p>
          </div>
          <button className="see-more">{t('See More')}</button>
        </div>
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>TECH</h2>
            <p>{t('techDescription')}</p>
          </div>
          <button className="see-more">{t('See More')}</button>
        </div>
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>BUSINESS</h2>
            <p>{t('businessDescription')}</p>
          </div>
          <button className="see-more">{t('See More')}</button>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
