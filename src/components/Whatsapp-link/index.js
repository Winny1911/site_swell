import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppLink = () => {
  return (
    <a
      className="whatsapp-link"
      href="https://wa.me/5511940592717?text=Ol%C3%A1%20Fernando%2C%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20or%C3%A7amento!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default WhatsAppLink;
