import React, { useState } from 'react';
import WaveStudioHome from '../../../assets/images/wave-studio/WaveStudioHome.svg';
import WaveSection from '../wave-items';
import ContactButton from '../../ui/Contact-button';
import ContactFormModal from '../../Contact-form';


const WaveStudio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <div id="discovery" style={{ background: 'linear-gradient(180deg, rgba(65, 163, 224, 0.94) 28.89%, rgba(160, 209, 240, 0.94) 53.75%, rgba(255, 255, 255, 0.94) 76.8%)' }}>
            <div className='container d-flex items-center justify-center position-relative md:justify-end xl:justify-evenly py-12'>
                <img src={WaveStudioHome} alt="Wave Studio" className='md:absolute md:left-[-11rem] md:top-[-3rem] lg:top-[-5rem] w-[1000px] '/>
                <div className='xl:w-[50%]'></div>
                <div className='z-1'>
                    <h2 className='text-white text-6xl md:text-7xl md:text-left md:pl-4'>Wave <br/> Discovery</h2>
                    <h4 className='text-3xl mt-3 md:text-left md:pl-4'>Transforme Ideias<br/>
                    em Estratégia de Sucesso.</h4>

                    <p className='text-2xl text-justify mt-12 md:w-[430px]'>
                        Na <strong>Wave Discovery</strong>, entendemos que o sucesso de qualquer iniciativa começa com 
                        uma compreensão profunda do contexto e uma definição clara dos objetivos. 
                        Desde a captura de insights até a criação de protótipos e o desenvolvimento 
                        de um roadmap estratégico, nosso objetivo é garantir soluções relevantes e 
                        eficazes que estejam perfeitamente alinhadas com a visão e metas de sua organização.
                    </p>

                    <ContactButton onClick={openModal}>
                            Solicite nosso contato
                    </ContactButton>
                </div>
            </div>

        </div>
            <div className='container text-2xl pb-12'>
                <p className='' style={{ marginTop: '10rem' }}>Os principais benefícios da <strong>Wave Discovery</strong> são:</p>
                <ul className='list-disc pl-10'>
                    <li>Alinhamento Organizacional.</li>
                    <li>Tomada de Decisão Informada.</li>
                    <li>Desenvolvimento de Estratégia e Plano de Entrega Eficazes.</li>
                    <li>Redução de Custo e Risco.</li>
                    <li>Melhoria na Qualidade de Solução.</li>
                </ul>
            
                <p className='mt-12'>Nosso modelo de atuação</p>

                <WaveSection
                    title="EXPLORATION | Alinhamento Estratégico"
                    description="Na etapa de <strong>EXPLORATION</strong>, focamos em alinhar as iniciativas da sua empresa com os OKRs organizacionais. 
                    Fornecemos suporte completo na criação e implementação de OKRs, além de orientação e 
                    facilitação no processo de captura e seleção de iniciativas para que estejam em sinergia 
                    com os objetivos estratégicos:"
                    listItems={[
                        'Suporte na Implementação de OKRs.',
                        'Critérios de Seleção Personalizados.',
                        'Facilitação do Processo de Decisão.',
                    ]}
                />
                
                <br />

                <WaveSection
                    title="ABSTRACTION | Do Insight à Ação"
                    description="Durante a fase de <strong>ABSTRACTION</strong>, focamos na transformação de insights em decisões 
                    informadas, transformando Ideias em Planos Concretos. Com o uso de 
                    técnicas avançadas de facilitação, ferramentas de prototipagem e modelagem de 
                    UI/UX, promovemos o entendimento profundo das opções disponíveis. 
                    Envolvemos equipes multidisciplinares em sessões de brainstorming direcionadas, 
                    garantindo que todos os ângulos sejam considerados e que as soluções sejam 
                    robustas e viáveis:"
                    listItems={[
                        'Sessões de Brainstorming Facilitadas.',
                        'Ferramentas de Prototipagem e UI/UX.',
                        'Compreensão Ampla e Profunda.',
                    ]}
                />

                <br />

                <WaveSection
                    title="BALANCE | Equilíbrio e Prioridade para Geração de Valor"
                    description="A etapa de <strong>BALANCE</strong> é crucial para o sucesso do projeto. 
                    Nesta fase, ajudamos a equilibrar as opções disponíveis, 
                    evoluindo os critérios existentes ou implementando novos modelos de 
                    ponderação e priorização. Também facilitamos a análise de viabilidade 
                    técnica, financeira e de risco, garantindo que o roadmap esteja 
                    perfeitamente alinhado com os objetivos do projeto e que o MVP seja 
                    claramente definido:"
                    listItems={[
                        'Critérios de Priorização Customizados.',
                        'Análise de Viabilidade.',
                    ]}
                />

                <br />

                <WaveSection
                    title="VISION ROADMAP | Planejamento Estratégico"
                    description="Na fase de <strong>VISION ROADMAP</strong>, 
                    concentramos nossos esforços em transformar direcionamentos e prioridades 
                    Organizacionais em Visão Estratégica orientada a resultados. 
                    Trabalhamos junto à sua equipe para definir de forma clara o Produto Mínimo Viável (MVP), 
                    para que reflita os principais objetivos do negócio orientando a criação de um 
                    roadmap que estabeleça marcos e metas para cada entrega, de acordo com as 
                    expectativas estabelecidas e orientada a entrega contínua de valor."
                    listItems={[
                        'Definição Clara do MVP e Planejamento Estratégico do Roadmap.',
                        'Estabelecimento de Marcos e Metas.',
                        'Abordagem dinâmica e flexível possibilitando adequações'
                    ]}
                />

                <br />

                <WaveSection
                    title="INTEGRATED BACKLOG | Consistência, Previsibilidade e Integração"
                    description="No <strong>INTEGRATED BACKLOG</strong>, nosso foco é garantir que cada item do backlog esteja detalhado, 
                    orientado para os resultados esperados e alinhado com a visão estratégica da organização. 
                    Através de um processo colaborativo, trabalhamos para que o backlog integre as necessidades de diferentes áreas, 
                    times e especialistas, mapeando riscos potenciais e identificando impedimentos. 
                    Nosso objetivo é criar um ambiente de trabalho fluido e previsível, 
                    onde todos os envolvidos tenham clareza sobre os pré-requisitos técnicos, 
                    habilitadores e o caminho para a entrega de valor:"
                    listItems={[
                        'Detalhamento Orientado a Resultados.',
                        'Integração com Áreas e Especialistas.',
                        'Mapeamento de Riscos e Impedimentos.',
                        'Identificação de Pré-requisitos Técnicos e Habilitadores.',
                        'Implementação e Aprimoramento de Técnicas de Estimativa e Previsibilidade.'
                    ]}
                />

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
                    Entre em contato conosco hoje mesmo e descubra como a <strong className='text-primaryBlue'>Wave Discovery</strong> pode impulsionar a inovação e o crescimento na sua organização.
                </p>
            </div>
    </>
  );
};

export default WaveStudio;