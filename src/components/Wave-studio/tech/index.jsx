import React, { useState } from 'react';
import WaveSection from '../wave-items/wave-section';
import ContactButton from '../../ui/Contact-button';
import ContactFormModal from '../../Contact-Modal';
import WaveButton from '../wave-items/wave-buttons';


const WaveTech = ({ setActiveComponent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <div id="tech" className="scrollUp" style={{ background: 'linear-gradient(180deg, rgba(65, 163, 224, 0.94) 28.89%, rgba(160, 209, 240, 0.94) 53.75%, rgba(255, 255, 255, 0.94) 76.8%)' }}>
            <div className='container d-flex items-center justify-center position-relative md:justify-end xl:justify-evenly py-12'>
                
                <WaveButton setActiveComponent={setActiveComponent} />
                
                <div className='xl:w-[50%]'></div>
                
                <div className='z-1'>
                    <h2 className='text-white text-7xl md:text-left md:pl-4'>Wave <br/> Tech</h2>
                    <h4 className='text-3xl mt-3 md:text-left md:pl-4'>
                        Inovação, Estabilidade<br/>
                        e Transformação Digital<br />
                        para o Sucesso do Seu Negócio
                    </h4>

                    <p className='text-2xl text-justify mt-12 px-4 md:w-[430px]'>
                        Na <strong>Wave Tech</strong>, combinamos conhecimento tecnológico de ponta com uma 
                        parceria estratégica para impulsionar a inovação, garantir a estabilidade 
                        e promover a transformação digital em todas as fases do ciclo de vida do software. 
                        Nossa abordagem é projetada para atender às suas necessidades específicas, 
                        com flexibilidade e escalabilidade, permitindo que sua equipe interna se 
                        concentre no core business enquanto nós cuidamos da tecnologia.
                    </p>

                    <ContactButton onClick={openModal}>
                            Solicite nosso contato
                    </ContactButton>
                </div>
            </div>

        </div>
            <div className='container text-2xl'>
                <p className='' style={{ marginTop: '10rem' }}>Os principais benefícios da <strong>Wave Tech</strong> são:</p>
                <ul className='list-disc pl-10'>
                    <li>Profissionais Altamente Qualificados.</li>
                    <li>Flexibilidade e Escalabilidade.</li>
                    <li>Práticas de Qualidade de Alto Padrão.</li>
                    <li>Redução de Custos Operacionais.</li>
                </ul>
            
                <p className='mt-12'>Modelos de contratação:</p>

                <WaveSection
                    title="DEVELOPMENT SQUAD | Inovação e Eficiência"
                    description="Para empresas que buscam acelerar a inovação sem comprometer a qualidade, 
                    nosso modelo <strong>Development Squad</strong> oferece uma equipe dedicada de especialistas. 
                    Através de uma abordagem flexível para a criação de aplicações, 
                    sistemas e soluções digitais customizadas para empresas que buscam excelência tecnológica, 
                    inovação ágil e otimização de recursos:"
                    listItems={[
                        'Experiência com as principais e mais inovadoras tecnologias do mercado.',
                        'Equipes com know-how em desenvolvimento ágil, híbrido e em waterfall.',
                        'Investimos no aprofundamento de conhecimento no negócio do Cliente.',
                        'Treinamento contínuo para garantir a atualização e a excelência da Equipe.'
                    ]}
                />
                
                <br />

                <WaveSection
                    title="MAINTENANCE SQUAD | Estabilidade e Eficiência"
                    description="A manutenção contínua é vital para garantir que suas aplicações e 
                    sistemas funcionem com a máxima eficiência. 
                    Nosso modelo <strong>Maintenance Squad</strong> é formatado para garantir o desempenho 
                    contínuo e a eficiência das aplicações digitais que impulsionam os negócios, 
                    atendendo à constante evolução das expectativas de qualidade e tempo de resposta:"
                    listItems={[
                        'Equipe dedicada, experiente e altamente qualificada.',
                        'Redução de Custos Operacionais em contratações.',
                        'Monitoramento proativo: estabilidade e desempenho das soluções.',
                        'Reduzindo o tempo de inatividade das soluções.'
                    ]}
                />

                <br />

                <WaveSection
                    title="SOFTWARE FACTORY | Transformação Digital Sob Medida"
                    description="Para empresas que necessitam de soluções tecnológicas sob medida, 
                    nossa <strong>Software Factory</strong> é a resposta. 
                    Nossos especialistas  trabalham em estreita colaboração com você 
                    para entender sua visão e transformar suas necessidades em software de alta qualidade:"
                    listItems={[
                        'Amplo domínio de tecnologias diversas.',
                        'Metodologias de desenvolvimento voltadas a eficiência e qualidade do projeto.',
                        'Atenção ao negócio do cliente e particularidades para efetividade do Software.',
                        'Desenvolvimento constante e especializado da equipe.'
                    ]}
                />

                <br />

                <WaveSection
                    title="STAFF AUGMENTATION | Talento Especializado e Versátil"
                    description="Para empresas que precisam de expertise de forma flexível, 
                    nosso modelo de <strong>Staff Augmentation</strong> fornece profissionais altamente qualificados, 
                    prontos para integrar sua equipe e impulsionar projetos críticos minimizando o 
                    tempo de adaptação e maximizando a produtividade desde o início. 
                    Nossos profissionais são cuidadosamente selecionados para atender uma ampla gama de necessidades:"
                    listItems={[
                        '<strong>Especialistas em Desenvolvimento</strong>: Contamos com desenvolvedores full-stack, front-end, back-end, engenheiros de software, entre outros com profundo conhecimento em diversas linguagens e frameworks, prontos para transformar ideias em soluções robustas e escaláveis.',
                        '<strong>Expertise em Qualidade:</strong> Nossos profissionais de QA são especializados em garantir a excelência do software, utilizando metodologias avançadas de automação, testes manuais e garantia de qualidade contínua.',
                        '<strong>Liderança em Projetos e Produtos:</strong> Gerentes de Projeto, Product Owners, Product Managers, entre outros. Profissionais experientes, com habilidades comprovadas em metodologias ágeis e tradicionais, assegurando que os projetos sejam entregues dentro do prazo, escopo e orçamento definidos.',
                        '<strong>Infraestrutura e DevSecOps:</strong> Profissionais especializados em automação de infraestrutura, CI/CD, monitoramento, segurança e DevSecOps, que garantem a estabilidade, escalabilidade e segurança dos ambientes de TI.',
                        '<strong>Liderança Ágil e Gestão de Portfólio:</strong> Gerentes de portfólio, Agile Coaches, Scrum Masters, entre outros,  com profundo conhecimento em frameworks ágeis, capazes de orientar equipes e organizações na transformação ágil e na gestão eficaz de múltiplos projetos.',
                        '<strong>Designers UX/UI:</strong> Profissionais focados em criar interfaces intuitivas e experiências envolventes.'
                    ]}
                />

                <br />

                <p className='text-2xl'>
                    <strong>Termos de Contratação:</strong>{""}
                    Os detalhes sobre termos e condições de contratação devem ser consultados diretamente conosco. 
                    Estamos aqui para fornecer todas as informações necessárias para que você tome a melhor decisão para o seu negócio.
                </p>

                <ContactButton onClick={openModal}>
                        Solicite nosso contato
                </ContactButton>

                <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />

                <p className='text-2xl mt-12 pb-12'>
                    Pronto para transformar suas ideias em realidade? 
                    Entre em contato conosco hoje mesmo e descubra como a <strong className='text-primaryBlue'>Wave Tech</strong> pode impulsionar a inovação e o crescimento na sua organização.
                </p>
            </div>
    </>
  );
};

export default WaveTech;