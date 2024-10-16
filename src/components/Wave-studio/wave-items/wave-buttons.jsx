import React from 'react';

const WaveButton = ({ setActiveComponent }) => {
  const handleScrollAndSetActive = (component) => {
    const section = document.getElementById('scrollTarget');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveComponent(component);
    }
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => handleScrollAndSetActive('discovery')}>Wave Discovery</button>
      <button onClick={() => handleScrollAndSetActive('tech')}>Wave Tech</button>
      <button onClick={() => handleScrollAndSetActive('business')}>Wave Business</button>
      <button onClick={() => handleScrollAndSetActive('talent')}>Wave Talent</button>
    </div>
  );
};

export default WaveButton;
