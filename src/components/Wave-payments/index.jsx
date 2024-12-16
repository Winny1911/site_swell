import WavePaymentsAdquirent from '../../assets/images/wave-payments/adquirente.png';
import WavePaymentsSubAdquirent from '../../assets/images/wave-payments/sub-adquirente.png';
import WavePaymentsDigital from '../../assets/images/wave-payments/pagamentos-digitais-azul.png';
import YourBusiness from '../../assets/images/wave-payments/svgviewer-output.svg';
import YourBusinessMobile from '../../assets/images/wave-payments/yourbsns.png';
import GatewayImage from '../../assets/images/wave-payments/1.GatewayImage.svg'
import CloudImage from '../../assets/images/wave-payments/2.CloudImage.svg'
import BoletoImage from '../../assets/images/wave-payments/3.BoletoImage.svg'
import TefWebImage from '../../assets/images/wave-payments/4.TefWebImage.svg'
import PagamentoImage from '../../assets/images/wave-payments/5.PagamentoImage.svg'
import AutomacaoImage from '../../assets/images/wave-payments/6.AutomaçãoImage.svg'

import './style.css';
import { useTranslation } from 'react-i18next';
import MobileCard from './MobileCard';
import { useEffect, useState } from 'react';

const WavePaymentsPage = () => {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

          {!isMobile && (
            <img
              src={YourBusiness}
              className="your-business-image pb-5 py-8"
              alt="Your Business Web"
            />
          )}

          {isMobile && (
            <>
              <img
                src={YourBusinessMobile}
                className="your-business-image pb-5 py-8"
                alt="Your Business Web"
              />
              <MobileCard
                title="GATEWAY"
                imageSrc={GatewayImage}
                imagePosition="right"
                items={["Múltiplos métodos de Pagamentos;", "PCI DSS Compliant;", "Frame de Pagamento."]}
              />

              <MobileCard
                title="BAIXA ONLINE / PIX / BITCOIN"
                imageSrc={CloudImage}
                imagePosition="left"
                items={["Baixa de todas as formas de pagamentos no sistema faturador."]}
              />

              <MobileCard
                title="BOLETO"
                imageSrc={BoletoImage}
                imagePosition="right"
                items={["Gerar boleto online;", "Importar arquivo (boleto pago);", "Baixa de boleto via API;", "Gera relatório de boletos."]}
              />

              <MobileCard
                title="TEF WEB"
                imageSrc={TefWebImage}
                imagePosition="left"
                items={["Pagamento presencial com cartão de Débito e Crédito integrado com POS."]}
              />

              <MobileCard
                title="SERVIÇOS DE AUTOMAÇÃO"
                imageSrc={PagamentoImage}
                imagePosition="right"
                items={["Agendamento de pagamento;", "Gestão de recorrência."]}
              />

              <MobileCard
                title="SERVIÇOS DE AUTOMAÇÃO"
                imageSrc={AutomacaoImage}
                imagePosition="left"
                items={["Envio de SMS;", "Abertura de protocolo;", "Validação e Baixa de pagamentos online Mobile;", "Integração Pix, QR code, Copia e cola;", "Consulta de cadastro;", "Links de pagamentos;", "Integração eletrônica EDI legado e API."]}
              />
            </>
          )}

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
