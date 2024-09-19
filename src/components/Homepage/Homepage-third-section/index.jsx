import React from 'react';
import CaseFull from '../../../assets/images/cases_full.gif'
import './style.css'

const ThirdSection = () => {

  return (
    <div id="third-section" className="third-section">
      <div className="wave-tech">
        <h2>Wave Tech</h2>
        <img className="case-width" src={CaseFull} alt='case de clientes' />
      </div>
    </div>
  );
}

export default ThirdSection;
