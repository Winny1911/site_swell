import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import images from '../../../assets/images/clientes-home/clientes.js';

const FourthSection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const { t } = useTranslation();

  const getRowDirection = (index) => {
    return index % 2 === 0 ? 'slide-right' : 'slide-left';
  };

  const rows = Array.from({ length: 2 }, (_, index) => {
    const startIndex = (images.length / 2) * index;
    return images.slice(startIndex, startIndex + images.length / 2);
  });

  return (
    <div className="fourth-section">
      <h2 className='blue-title container small-container'>{t('clients')}</h2>
      {rows.map((rowImages, rowIndex) => (
        <div
          key={rowIndex}
          className={`gap-12 row white-space ${getRowDirection(rowIndex)} ${hoveredRow === rowIndex ? 'paused' : ''}`}
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