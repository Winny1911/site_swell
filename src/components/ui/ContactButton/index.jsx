import React from 'react';

const ContactButton = ({ onClick, children, className }) => {
  return (
    <button
      className={`mt-4 bg-primaryBlue text-white p-3 rounded-[30px] ml-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ContactButton;