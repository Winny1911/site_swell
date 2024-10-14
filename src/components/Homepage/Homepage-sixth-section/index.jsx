import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import "./style.css";
import ContactForm from '../../ui/Contact-form';

const SixthSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="sixth-section">
      <div className='left-box text-justify'>
        <h2 style={{ fontWeight: 'bold' }}>{t('Transform Vision into Innovation with us!')}</h2>
        <p style={{ marginBottom: 0 }}>{t('We are ready to boost your company\'s success!')}</p>
        <p>{t('Fill out the form below and allow our team to get in touch.')}</p>
        <p className="small-text text-justify">
          {t('The Controller of personal data is Swell IT Solutions. The data entered in the form will be processed solely and exclusively to maintain contact.')}
          <br/>
          {t('You can withdraw any consent given at any time. For additional information or to exercise your rights, please visit the')} <a className="text-underline" href="/politica_privacidade.html" target="_blank" rel="noopener noreferrer">{t('privacy notice')}</a>.
          <br/>
          {t('Swell does not use contact information to send any type of SPAM.')}
        </p>
      </div>
      <ContactForm
        formData={formData}
        setFormData={setFormData}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
}

export default SixthSection;
