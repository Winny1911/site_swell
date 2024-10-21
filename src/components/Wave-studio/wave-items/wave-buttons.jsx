import React from 'react';
import TechSVG from './TechSvg'
import ActiveTechSvg from './ActiveTechSvg'
import BusinessSvg from './BusinessSvg'
import ActiveBusinessSvg from './ActiveBusinessSvg'
import TalentSvg from './TalentSvg';
import ActiveTalentSvg from './ActiveTalentSvg';
import DiscoverySvg from './DiscoverySvg';
import ActiveDiscoverySvg from './ActiveDiscoverySvg';
import WaveTitle from '../../../assets/images/wave-studio/WaveTechTitle.png'

const WaveButton = ({ setActiveComponent, activeComponent }) => {
  const handleScrollAndSetActive = (component) => {
    const section = document.getElementById('scrollTarget');

    if (section && window.innerWidth >= 768) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveComponent(component);
    }
  };

  return (
    <div className="relative w-full h-[500px] cursor-default ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={WaveTitle} alt="Wave Title" className='max-w-[300px] lg:max-w-[460px]'/>
        </div>

        <div className="absolute left-[4rem] lg:left-[0px] top-1/2 transform -translate-y-1/2"
          onClick={() => handleScrollAndSetActive('tech')} 
        >
            {activeComponent === 'tech' ? <ActiveTechSvg /> : <TechSVG />}
        </div>

        <div className="absolute right-[4rem] lg:right-[0px] top-1/2 transform -translate-y-1/2"
          onClick={() => handleScrollAndSetActive('business')} 
        >
            {activeComponent === 'business' ? <ActiveBusinessSvg /> : <BusinessSvg />}
        </div>

        <div className="absolute bottom-[5rem] lg:bottom-[1rem] left-1/2 transform -translate-x-1/2"
          onClick={() => handleScrollAndSetActive('talent')} 
        >
            {activeComponent === 'talent' ? <ActiveTalentSvg /> : <TalentSvg />}
        </div>

        <div className="absolute top-[5rem] lg:top-[1rem] left-1/2 transform -translate-x-1/2"
          onClick={() => handleScrollAndSetActive('discovery')} 
        >
          {activeComponent === 'discovery' ? <ActiveDiscoverySvg /> : <DiscoverySvg />}
        </div>
    </div>
  );
};

export default WaveButton;
