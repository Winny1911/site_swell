import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const ContactFormModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      setIsVisible(true);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      setIsVisible(false);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div ref={modalRef} className={`flex flex-col md:flex-row bg-white height-[50vh] p-6 rounded-[15px] border-2 border-[#41A3E0] relative transform transition-transform duration-300 ease-in-out max-h-full overflow-y-auto ${isVisible ? 'scale-100' : 'scale-95'}`}>
        {/* Close Button for Mobile */}
        <button
          className="absolute top-2 right-2 md:hidden text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className='left-box md:w-[500px]'>
          <h2 style={{ fontWeight: 'bold' }}>{t('Transform Vision into Innovation with us!')}</h2>
          <p style={{ textAlign: 'left', marginBottom: 0 }}>{t('We are ready to boost your company\'s success!')}</p>
          <p style={{ textAlign: 'left' }}>{t('Fill out the form below and allow our team to get in touch.')}</p>
          <p className="small-text leading-normal">
            {t('The Controller of personal data is Swell IT Solutions. The data entered in the form will be processed solely and exclusively to maintain contact.')}
            {t('You can withdraw any consent given at any time. For additional information or to exercise your rights, please visit the')} <a className="text-underline" href="/politica_privacidade.html" target="_blank" rel="noopener noreferrer">{t('privacy notice')}</a>.
            {t('Swell does not use contact information to send any type of SPAM.')}
          </p>
        </div>
        <form className="contact-form">
          <h2 className='text-white pb-2'>CONTATO</h2>
          <div className="form-row">
            <div className="form-group col-md-8">
              <input type="text" className="form-control" placeholder={t('Name')} />
            </div>
            <div className="form-group col-md-4">
              <input type="text" className="form-control" placeholder={t('Whatsapp')} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <input type="email" className="form-control" placeholder={t('Email')} />
            </div>
            <div className="form-group col-md-4">
              <input type="text" className="form-control" placeholder={t('Company')} />
            </div>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="3" placeholder={t('Type your message here (optional)')}></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-primary-light float-right text-uppercase mt-3">
            {t('Send')} <FontAwesomeIcon icon={faLongArrowAltRight} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactFormModal;