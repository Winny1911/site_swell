import React from 'react';

const ContactButton = ({ onClick, children, className }) => {
  return (
    <button
      className={`bg-primaryBlue text-white p-3 rounded-[30px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ContactButton;