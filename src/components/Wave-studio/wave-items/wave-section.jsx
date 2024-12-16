import React from 'react';
import { useTranslation } from 'react-i18next';

const WaveSection = ({ type="Discovery" ,sectionKey, title, description, listItems }) => {
  const { t, ready } = useTranslation();

  if (!ready || (!sectionKey && !(title && description && listItems))) {
    return <p>Loading...</p>;
  }

  const translatedTitle = sectionKey
    ? t(`WaveStudio.${type}.${sectionKey}.Title`)
    : title;
  const translatedDescription = sectionKey
    ? t(`WaveStudio.${type}.${sectionKey}.Description`)
    : description;
  const translatedListItems = sectionKey
    ? t(`WaveStudio.${type}.${sectionKey}.ListItems`, { returnObjects: true })
    : listItems;

  return (
    <div>
      <p className='text-primaryBlue'>{translatedTitle}</p>
      <p className='text-justify' dangerouslySetInnerHTML={{ __html: translatedDescription }}></p>
      <ul className='list-disc pl-5 text-justify'>
        {Array.isArray(translatedListItems) &&
          translatedListItems.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
      </ul>
    </div>
  );
};



export default WaveSection;
