import WavePaymentsAdquirent from '../../assets/images/wave-payments/adquirente.png';
import WavePaymentsSubAdquirent from '../../assets/images/wave-payments/sub-adquirente.png';
import WavePaymentsDigital from '../../assets/images/wave-payments/pagamentos-digitais-azul.png';
import YourBusiness from '../../assets/images/wave-payments/pagamentos-digitais-branco.png';

import './style.css';

const WavePaymentsPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="bg-wave min-h-screen flex items-center justify-center px-4 -mb-[1rem]">
          <div className="text-center items-center">
              <h1 className="lg:text-8xl font-bold text-white">Wave Payments</h1>
              <p className="text-4xl text-white mt-4">Centralize, Gerencie e Simplifique suas Transações.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center linear-bg">
          <h2 className='text-white text-center text-2xl'>Mais vantagem e competitividade de acordo com sua necessidade!</h2>
          <ul className='text-white lg:w-[800px]'>
            <li>- Desenvolva APIs Personalizadas;</li>
            <li>- Integre pagamentos com Criptomoedas;</li>
            <li>- Permita transações rápidas sem inserir o cartão com Tap On;</li>
            <li>- Conte com serviços de Compliance e Gestão de Riscos;</li>
            <li>- Tenha seu próprio Hub de Pagamentos centralizado e realize a gestão de múltiplos métodos e serviços de pagamentos, permitindo que transações sejam processadas de forma eficiente, segura e simplificada.</li>
          </ul>
          <img src={YourBusiness}  className="your-business-image pb-5 fit-content" alt="Your Business Web" />
        </div>
      </div>
      <div className="container small-container wave-payments-adquirement pt-5">
        <img src={WavePaymentsAdquirent} alt="adquirente"/>
        <div>
          <h3>ADQUIRENTE</h3>
          <p>Torne-se um dos principais processadores de transações!</p>
          <p>Realize o processamento direto de transações conectando clientes e bandeiras de cartão</p>
          <ul className="pt-3">
            <li>- Autorização Transações;</li>
            <li>- Liquidação de Fundos;</li>
            <li>- Conformidade e Segurança;</li>
            <li>- Gestão de Riscos</li>
            <li>- Contrato Direto com Comerciantes</li>
          </ul>
        </div>
      </div>
      <div className="container small-container wave-payments-subadquirement pt-5">
        <img src={WavePaymentsSubAdquirent} alt="sub-adquirente"/>
        <div>
          <h3>SUB - ADQUIRENTE</h3>
          <p>Simplifique o acesso aos serviços de pagamento!</p>
          <p>Atue como intermediário facilitando a integração e reduzindo requisitos de conformidade</p>
          <span>entre comenricantes e adquirentes</span>
          <ul className="pt-3">
            <li>- Integração Simplificada;</li>
            <li>- Conta de Sub-Merchant;</li>
            <li>- Gerenciamento de Transações;</li>
            <li>- Serviços adicionais como antifraude, análise de dados e suporte ao cliente</li>
            <li>- Responsabilidade pela Conformidade</li>
          </ul>
        </div>
      </div>
      <div className="container small-container digital-payments flex-col">
        <img src={WavePaymentsDigital} className="pb-5" alt="device-showing-qr-code"/>
        <h3>PAGAMENTOS DIGITAIS</h3>
        <p className='pb-4'>Ofereça suporte a diversas formas de pagamento digital!</p>
        <div className='d-flex'>
          <ul>
            <li>
            - Tenha alcance global e atenda clientes de diferentes regiões com preferências variadas de pagamento.
            </li>
            <li>
              - Ofereça flexibilidade e conveniência com múltiplas opções de pagamento e aumente as chances de conversão
            </li>
            <li>
              - Garanta segurança com implementação de medidas de segurança adptadas a cada método, reduzindo fraudes.
            </li>
          </ul>
          <ul>
            <li>
              - Inovação e com competitividade com suporte a novas tecnologias de pagamento e transferências instantâneas.
            </li>
            <li>
              - Integre e processe pagamentos com criptomedas.
            </li>
          </ul>
        </div>
        <h5 className='digital-footer pt-5'>
          Conte com nossos serviços para eliminar a complexidade e solucionar seus desafios de pagamentos
        </h5>
      </div>
    </div>
  );
}

export default WavePaymentsPage;
