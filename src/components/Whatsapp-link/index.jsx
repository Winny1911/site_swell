import React from 'react';
import WhatsappIcon from '../../assets/images/icons/whatsapp-icon.png';

const WhatsAppLink = () => {
  return (
    <a
      href="https://wa.me/5511940592717?text=Ol%C3%A1%20Fernando%2C%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20or%C3%A7amento!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={WhatsappIcon} className="icons" alt="Whatsapp Icon" />
    </a>
  );
};

export default WhatsAppLink;
