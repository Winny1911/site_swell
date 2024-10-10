import React, { useState } from 'react';
import WaveStudioHome from '../../../assets/images/wave-studio/WaveTalentHome.svg';
import WaveSection from '../wave-items';
import ContactButton from '../../Contact-button';
import ContactFormModal from '../../Contact-form';

const WaveTalent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <div id="talent" style={{ background: 'linear-gradient(180deg, rgba(65, 163, 224, 0.94) 28.89%, rgba(160, 209, 240, 0.94) 53.75%, rgba(255, 255, 255, 0.94) 76.8%)' }}>
            <div className='container d-flex items-center justify-center position-relative md:justify-end xl:justify-evenly py-12'>
                <img src={WaveStudioHome} alt="Wave Studio" className='md:absolute md:left-[-11rem] md:top-[-3rem] lg:top-[-5rem] w-[1000px] '/>
                <div className='xl:w-[50%]'></div>
                <div className='z-1'>
                    <h2 className='text-white text-7xl md:text-left md:pl-4'>Wave <br/> Talent</h2>
                    <h4 className='text-3xl mt-3 md:text-left md:pl-4'>
                        Potencialize o desempenho<br/>
                        e o crescimento do seu negócio.
                    </h4>

                    <p className='text-2xl text-justify mt-12 px-4 md:w-[430px]'>
                        Encontre o melhor talento para o seu sucesso com <strong>Wave Talent</strong>. 
                        A nossa estratégia dinâmica de recrutamento garante o ajuste perfeito entre talento e organização.
                    </p>

                    <ContactButton onClick={openModal}>
                            Solicite nosso contato
                    </ContactButton>
                </div>
            </div>

        </div>
            <div className='container text-2xl'>
                <p className='' style={{ marginTop: '10rem' }}>Os principais benefícios da <strong>Wave Talent</strong> são:</p>
                <ul className='list-disc pl-10'>
                    <li>Agilidade na contratação.</li>
                    <li>Maior Aderência entre Profissional e Organização.</li>
                    <li>Crescimento de Capital Intelectual.</li>
                    <li>Aumento da Performance.</li>
                </ul>
            
                <p className='mt-12'>Modelos de contratação:</p>

                <WaveSection
                    title="SHARED TALENT | Parceria Adaptada, Flexibilidade e  Eficiência"
                    description="O melhor dos dois mundos: Nosso modelo de Shared Talent permite que as empresas 
                    beneficiem-se da flexibilidade e da segurança ao contratar talentos qualificados que 
                    são inicialmente alocados atuando no Cliente no formato Staff Augmentation, 
                    após um período de avaliação acordado, o Cliente tem total liberdade para decidir pela internalização do profissional. 
                    estratégicos:"
                    listItems={[
                        'Avaliação de Desempenho em Tempo Real.',
                        'Redução de Riscos de Contratação.',
                        'Suporte Swell para o desenvolvimento do Profissional.',
                        'Adaptação às Necessidades do Projeto.',
                        'Decisão Informada para Internalização.',
                    ]}
                />
                
                <br />

                <WaveSection
                    title="TARGET TALENT | Seleção Especializada"
                    description="O Target Talent é a solução ideal para empresas que precisam de apoio especializado na identificação 
                    e contratação de talentos altamente qualificados. Identificamos e selecionamos os profissionais que melhor se 
                    encaixam nessas necessidades. Após a aprovação, os profissionais são contratados diretamente pelo Cliente, 
                    sem necessidade de alocação prévia ou período de avaliação: robustas e viáveis:"
                    listItems={[
                        'Recrutamento Personalizado.',
                        'Foco na Excelência Profissional.',
                        'Redução do Tempo de Contratação.',
                        'Consultoria e Suporte Durante a Seleção.',
                        'Contratação Direta pelo Cliente.'
                    ]}
                />

                <br />

                <p className='text-2xl'>
                    <strong>Termos de Contratação:</strong>{" "}
                    Os detalhes sobre termos e condições de contratação devem ser consultados diretamente conosco. 
                    Estamos aqui para fornecer todas as informações necessárias para que você tome a melhor decisão para o seu negócio.
                </p>

                <ContactButton onClick={openModal}>
                    Solicite nosso contato
                </ContactButton>

                <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />

                <p className='text-2xl mt-12'>
                    Pronto para transformar suas ideias em realidade? 
                    Entre em contato conosco hoje mesmo e descubra como a <strong className='text-primaryBlue'>Wave Tech</strong> pode impulsionar a inovação e o crescimento na sua organização.
                </p>
            </div>
    </>
  );
};

export default WaveTalent;