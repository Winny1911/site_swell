import React from 'react';
import TechSVG from './TechSvg'
import BusinessSvg from './BusinessSvg'
import TalentSvg from './TalentSvg';
import DiscoverySvg from './DiscoverySvg';
import WaveTitle from '../../../assets/images/wave-studio/WaveTechTitle.png'

const WaveButton = ({ setActiveComponent }) => {
  const handleScrollAndSetActive = (component) => {
    const section = document.getElementById('scrollTarget');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveComponent(component);
    }
  };

  return (
    <div className="relative w-full h-[500px] cursor-default">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={WaveTitle} alt="Wave Title" />
        </div>

        <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2"
          onClick={() => handleScrollAndSetActive('discovery')} 
        >
            <DiscoverySvg />
        </div>

        <div className="absolute left-[-4%] top-1/2 transform -translate-y-1/2"
          onClick={() => handleScrollAndSetActive('tech')} 
        >
            <TechSVG />
        </div>

        <div className="absolute right-[-4%] top-1/2 transform -translate-y-1/2"
          onClick={() => handleScrollAndSetActive('business')} 
        >
            <BusinessSvg />
        </div>

        <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2"
          onClick={() => handleScrollAndSetActive('talent')} 
        >
            <TalentSvg />
        </div>
    </div>
  );
};

export default WaveButton;
