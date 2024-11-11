import WavePaymentsAdquirent from '../../assets/images/wave-payments/adquirente.png';
import WavePaymentsSubAdquirent from '../../assets/images/wave-payments/sub-adquirente.png';
import WavePaymentsDigital from '../../assets/images/wave-payments/pagamentos-digitais-azul.png';
import YourBusiness from '../../assets/images/wave-payments/pagamentos-digitais-branco.png';

import './style.css';
import { useTranslation } from 'react-i18next';

const WavePaymentsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="bg-wave min-h-screen flex items-center justify-center px-4 -mb-[1rem]">
          <div className="text-center items-center">
          <h1 className="lg:text-8xl font-bold text-white">Wave Payments</h1>
          <p className="text-4xl text-white mt-4">{t('WavePayments.Intro')}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center linear-bg">
        <h2 className='text-white text-center text-[28px] mb-8 lg:mb-4'>{t('WavePayments.AdvantagesTitle')}</h2>
          <ul className='container small-container text-white px-4'>
            <li>{t('WavePayments.Advantage1')}</li>
            <li>{t('WavePayments.Advantage2')}</li>
            <li>{t('WavePayments.Advantage3')}</li>
            <li>{t('WavePayments.Advantage4')}</li>
            <li>{t('WavePayments.Advantage5')}</li>
          </ul>
          <img src={YourBusiness}  className="your-business-image pb-5 fit-content py-8" alt="Your Business Web" />
        </div>
      </div>
      <div className="container small-container wave-payments-adquirement pt-5">
        <img src={WavePaymentsAdquirent} alt="adquirente"/>
        <div>
          <h3 className='defaultFontSize'>{t('WavePayments.AcquirerTitle')}</h3>
          <p>{t('WavePayments.AcquirerDescription')}</p>
          <p className='text-justify'>{t('WavePayments.AcquirerIntro')}</p>
          <ul className="pt-3">
            <li>{t('WavePayments.AcquirerAdvantage1')}</li>
            <li>{t('WavePayments.AcquirerAdvantage2')}</li>
            <li>{t('WavePayments.AcquirerAdvantage3')}</li>
            <li>{t('WavePayments.AcquirerAdvantage4')}</li>
            <li>{t('WavePayments.AcquirerAdvantage5')}</li>
          </ul>
        </div>
      </div>
      <div className="container small-container wave-payments-subadquirement pt-5">
        <img src={WavePaymentsSubAdquirent} alt="sub-adquirente"/>
        <div>
          <h3 className='defaultFontSize'>{t('WavePayments.SubAcquirerTitle')}</h3>
          <p>{t('WavePayments.SubAcquirerDescription')}</p>
          <p className='text-justify'>{t('WavePayments.SubAcquirerIntro')}</p>
          <ul className="pt-3">
            <li>{t('WavePayments.SubAcquirerAdvantage1')}</li>
            <li>{t('WavePayments.SubAcquirerAdvantage2')}</li>
            <li>{t('WavePayments.SubAcquirerAdvantage3')}</li>
            <li>{t('WavePayments.SubAcquirerAdvantage4')}</li>
            <li>{t('WavePayments.SubAcquirerAdvantage5')}</li>
          </ul>
        </div>
      </div>
      <div className="container small-container digital-payments flex-col">
        <img src={WavePaymentsDigital} className="pb-5" alt="device-showing-qr-code"/>
        <h3 className='defaultFontSize'>{t('WavePayments.DigitalPaymentsTitle')}</h3>
        <p className='pb-4'>{t('WavePayments.DigitalPaymentsDescription')}</p>
        <div className='d-flex'>
          <ul className='hk-light text-justify'>
            <li>{t('WavePayments.DigitalAdvantage1')}</li>
            <li>{t('WavePayments.DigitalAdvantage2')}</li>
            <li>{t('WavePayments.DigitalAdvantage3')}</li>
          </ul>
          <ul className='text-justify'>
            <li>{t('WavePayments.DigitalAdvantage4')}</li>
            <li>{t('WavePayments.DigitalAdvantage5')}</li>
          </ul>
        </div>
        <h5 className='digital-footer pt-5'>{t('WavePayments.FooterMessage')}</h5>
      </div>
    </div>
  );
}

export default WavePaymentsPage;
