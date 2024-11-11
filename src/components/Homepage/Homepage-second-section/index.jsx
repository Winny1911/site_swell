import React from 'react';
import { useTranslation } from 'react-i18next';
import WaveStudio from '../../../assets/images/wave-studio.svg'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useActiveComponent } from '../../../context/ActiveComponentContext';

const SecondSection = () => {
  const { setActiveComponent } = useActiveComponent();

  const { t} = useTranslation();
  const navigate = useNavigate();

  const handleSeeDiscoveryClick = () => {
    setActiveComponent('discovery');
    navigate('/wave#discovery');
    setTimeout(() => {
      const element = document.getElementById('scrollTarget');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const handleSeeTechClick = () => {
    setActiveComponent('tech');
    navigate('/wave#tech');
    setTimeout(() => {
      const element = document.getElementById('scrollTarget');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const handleSeeBusinessClick = () => {
    setActiveComponent('business'); 
    navigate('/wave#business');
    setTimeout(() => {
      const element = document.getElementById('scrollTarget');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };


  const handleClickWave = () => {
    navigate('/wave');
  };

  return (
    <div id="wavestudio" className="second-section">
      <div className="wave-studio container small-container">
        <div className='flex flex-col lg:flex-row items-center justify-between pt-12'>
          <div className='half-width'>
            <h2 className='white-text'>{t('Wave Studio')}</h2>
            <p className='text-justify'>{t('waveStudioDescription')}</p>
          </div>
          <img src={WaveStudio} alt={t('waveStudioImageAlt')} />
        </div>
            <button className="centered-button know-button" onClick={handleClickWave}>
              {t('See More')}
            </button>
      </div>

      <div className="section-wrapper container">
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>DISCOVERY</h2>
            <p>{t('discoveryDescription')}</p>
          </div>
            <button className="know-button" onClick={handleSeeDiscoveryClick}>{t('See More')}</button>
        </div>
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>TECH</h2>
            <p>{t('techDescription')}</p>
          </div>
            <button className="know-button" onClick={handleSeeTechClick}>{t('See More')}</button>
        </div>
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>BUSINESS</h2>
            <p>{t('businessDescription')}</p>
          </div>
            <button className="know-button" onClick={handleSeeBusinessClick}>{t('See More')}</button>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
