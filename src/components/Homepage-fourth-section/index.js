import React, { useState } from 'react';
import './style.css';
import images from '../../assets/images/clientes-home/clientes.js';

const FourthSection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const getRowDirection = (index) => {
    return index % 2 === 0 ? 'slide-right' : 'slide-left';
  };

  const rows = Array.from({ length: 5 }, (_, index) => {
    const startIndex = (images.length / 5) * index;
    return images.slice(startIndex, startIndex + images.length / 5);
  });

  return (
    <div className="fourth-section">
      <h2 className='blue-title container small-container'>Clientes</h2>
      {rows.map((rowImages, rowIndex) => (
        <div
          key={rowIndex}
          className={`row white-space ${getRowDirection(rowIndex)} ${hoveredRow === rowIndex ? 'paused' : ''}`}
          onMouseEnter={() => setHoveredRow(rowIndex)}
          onMouseLeave={() => setHoveredRow(null)}
        >
          {rowImages.concat(rowImages).map((img, imgIndex) => (
            <img key={imgIndex} src={img} alt={`Cliente ${imgIndex}`} className="client-image" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FourthSection;
