import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import "./style.css";

const SixthSection = () => {
  const { t } = useTranslation();

  return (
    <div className="sixth-section">
      <h2 style={{ fontWeight: 'bold' }}>{t('Transform Vision into Innovation with us!')}</h2>
      <p style={{ textAlign: 'left', marginBottom: 0 }}>{t('We are ready to boost your company\'s success!')}</p>
      <p style={{ textAlign: 'left' }}>{t('Fill out the form below and allow our team to get in touch.')}</p>
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group col-md-8">
            <input type="text" className="form-control" placeholder={t('Name')} />
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" placeholder={t('Position')} />
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
          <input type="text" className="form-control" placeholder={t('Subject')} />
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="3" placeholder={t('Type your message here (optional)')}></textarea>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          {t('Send')} <FontAwesomeIcon icon={faLongArrowAltRight} />
        </button>
      </form>
      <p className="small-text">
        {t('The Controller of personal data is Swell IT Solutions. The data entered in the form will be processed solely and exclusively to maintain contact.')}
        <br/>
        {t('You can withdraw any consent given at any time. For additional information or to exercise your rights, please visit the')} <a className="text-underline" href="https://swellitsolutions.com.br/politica_privacidade" target="_blank" rel="noopener noreferrer">{t('privacy notice')}</a>.
        <br/>
        {t('Swell does not use contact information to send any type of SPAM.')}
      </p>
    </div>
  );
}

export default SixthSection;
