import React from 'react';
import { useTranslation } from 'react-i18next';

const WaveSection = ({ sectionKey }) => {
  const { t } = useTranslation();

  const listItems = t(`WaveStudio.Discovery.${sectionKey}.ListItems`, { returnObjects: true });

  return (
    <div>
      <p className='text-primaryBlue'>{t(`WaveStudio.Discovery.${sectionKey}.Title`)}</p>
      <p className='text-justify' dangerouslySetInnerHTML={{ __html: t(`WaveStudio.Discovery.${sectionKey}.Description`) }}></p>
      <ul className='list-disc pl-5 text-justify'>
        {Array.isArray(listItems) && listItems.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    </div>
  );
};

export default WaveSection;
