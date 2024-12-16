import React from 'react';

const WaveSectionFallback = ({ title, description, listItems }) => {
  return (
    <div>
      <p className='text-primaryBlue'>{title}</p>
      <p
        className='text-justify'
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <ul className='list-disc pl-5 text-justify'>
        {listItems.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    </div>
  );
};

export default WaveSectionFallback;
