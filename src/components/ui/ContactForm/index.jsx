import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import ArrowRight from '../../../assets/images/icons/arrow-right.png'
import PhoneInput from 'react-phone-input-2';

const ContactForm = ({ formData, setFormData, setSuccessMessage, setErrorMessage }) => {
    const { t } = useTranslation();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => phone && phone.length > 0;    

    const validateFields = () => {
        const emailError = validateEmail(formData.email) ? '' : t('Invalid Email');
        const phoneError = validatePhone(formData.phone) ? '' : t('Invalid Phone');
        const nameError = formData.name.trim() === '' ? t('Name is required') : '';
        const companyError = formData.company.trim() === '' ? t('Company is required') : '';

        setErrors({
            name: nameError,
            email: emailError,
            phone: phoneError,
            company: companyError,
        });

        return !emailError && !phoneError && !nameError && !companyError;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePhoneChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            phone: value,
        }));
    };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (validateFields()) {
      setIsSubmitting(true);

      const formBody = Object.keys(formData)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
        .join('&');

      try {
        const response = await axios.post('/mail/contact_me.php', formBody, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (response.status === 200) {
          setSuccessMessage('Sua mensagem foi enviada com sucesso.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
          });
        }
      } catch (error) {
        setErrorMessage('Tivemos um erro no envio, tente novamente.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className='text-white pb-2'>{t('Contact')}</h2>
        <div className="flex flex-col md:flex-row gap-2">
            <div className="form-group w-full">
            <input 
                type="text"
                className="form-control"
                name="name"
                placeholder={t('Name')}
                value={formData.name}
                onChange={handleInputChange}
                required 
            />
            </div>
            <div className="form-group w-full">
            <PhoneInput
                country={'br'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputClass={`form-control ${errors.phone && 'is-invalid'}`}
                enableSearch={true}
                placeholder={t('phone')}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
            <div className="form-group w-full">
            <input 
                type="email"
                className={`form-control ${errors.email && 'is-invalid'}`}
                name="email"
                placeholder={t('Email')}
                value={formData.email}
                onChange={handleInputChange}
                required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group w-full">
            <input type="text"
                className="form-control"
                name="company"
                placeholder={t('Company')}
                value={formData.company}
                onChange={handleInputChange}
            />
            </div>
        </div>
        <div className="form-group">
        <textarea
            className="form-control"
            rows="3"
            name="message"
            placeholder={t('Type your message here (optional)')}
            value={formData.message}
            onChange={handleInputChange}
        ></textarea>
        </div>
        <button 
            type="submit" 
            className="flex self-center justify-center items-center w-fit py-2 px-3 rounded-2xl btn-primary btn-primary-light text-uppercase mt-3"
            disabled={isSubmitting}
        >
            {isSubmitting ? t('Sending...') : t('Solicite nosso contato')} <img src={ArrowRight} alt="Send arrow icon" className='ml-2'/>
        </button>
    </form>
  );
};

export default ContactForm;
