import React from 'react';
import CaseFull from '../../assets/images/cases_full.gif'
import './style.css'

const ThirdSection = () => {
  return (
    <div className="third-section">
      <div className="">
        <img className="case-width" src={CaseFull} alt='case de clientes' />
      </div>
      <button className="know-button">VER COMPLETO</button>
    </div>
  );
}

export default ThirdSection;
