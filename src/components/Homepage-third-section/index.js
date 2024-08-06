import React from 'react';
import { useTranslation } from 'react-i18next';
import CaseFull from '../../assets/images/cases_full.gif'
import './style.css'

const ThirdSection = () => {
  const { t } = useTranslation();


  return (
    <div className="third-section">
      <div className="">
        <img className="case-width" src={CaseFull} alt='case de clientes' />
      </div>
      <button className="know-button">{t('know_button')}</button>
    </div>
  );
}

export default ThirdSection;
