import React, { useState } from 'react';
import WaveStudioHome from '../../../assets/images/wave-studio/WaveBusinessHome.svg';
import WaveSection from '../wave-items';
import ContactButton from '../../ui/Contact-button';
import ContactFormModal from '../../Contact-form';


const WaveBusiness = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <div id="business" style={{ background: 'linear-gradient(180deg, rgba(65, 163, 224, 0.94) 28.89%, rgba(160, 209, 240, 0.94) 53.75%, rgba(255, 255, 255, 0.94) 76.8%)' }}>
            <div className='container d-flex items-center justify-center position-relative md:justify-end xl:justify-evenly py-12'>
                <img src={WaveStudioHome} alt="Wave Studio" className='md:absolute md:left-[-11rem] md:top-[-3rem] lg:top-[-5rem] w-[1000px] '/>
                <div className='xl:w-[50%]'></div>
                <div className='z-1'>
                    <h2 className='text-white text-7xl md:text-left md:pl-4'>Wave <br/> Business <br/> & Process</h2>
                    <h4 className='text-3xl mt-3 md:text-left md:pl-4'>
                        Maximização de Resultados<br/>
                        e Inovação para Seu Negócio<br />
                    </h4>

                    <p className='text-2xl text-justify mt-12 px-4 md:w-[430px]'>
                        Na <strong>Wave Business</strong>, combinamos conhecimento tecnológico de ponta com uma 
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
                <p className='' style={{ marginTop: '10rem' }}>Os principais benefícios da <strong>Wave Business & Process</strong> são:</p>
                <ul className='list-disc pl-10'>
                    <li>Inovação Contínua.</li>
                    <li>Otimização Operacional e Adaptabilidade.</li>
                    <li>Qualidade e Segurança Aprimoradas.</li>
                </ul>
            
                <p className='mt-12'>Modelos e Abordagens:</p>

                <WaveSection
                    title="TRANSFORMAÇÃO DIGITAL, AUTOMAÇÃO E INOVAÇÃO | Implemente o Futuro"
                    description="Leve sua empresa ao próximo nível com soluções robustas de transformação digital e automação, desenhadas para criar novas oportunidades de negócio, otimizar processos e melhorar a experiência do cliente. Implementamos tecnologias de ponta que impulsionam a inovação e modernizam sua operação"
                    listItems={[
                        '<strong>Digital Transformation:</strong> Realize uma transformação completa que abrange processos, cultura e tecnologia, conduzindo sua organização para a era digital. Medimos o sucesso com indicadores como a adoção tecnológica e a eficiência operacional pós-implementação.',
                        '<strong>Artificial Intelligence & Machine Learning:</strong> Automatize processos e obtenha insights valiosos com inteligência artificial e aprendizado de máquina. Nossas implementações focam em KPIs como redução de custos e melhoria na tomada de decisões.',
                        '<strong>Internet of Things (IoT):</strong> Conecte dispositivos e sistemas para melhorar a eficiência operacional e criar novas oportunidades de negócio. Utilizamos métricas como a redução de downtime e o aumento da produtividade.',
                        '<strong>Cloud Migration:</strong> Migre seus sistemas para a nuvem com segurança, flexibilidade e redução de custos. Acompanhamos a implementação com indicadores de redução de TCO (Total Cost of Ownership) e melhorias em escalabilidade.',
                        '<strong>Robotic Process Automation (RPA):</strong> Liberte sua equipe de tarefas manuais e repetitivas com RPA, permitindo foco em atividades estratégicas. Medimos o sucesso com a redução do tempo de ciclo e aumento na capacidade produtiva.'
                    ]}
                />
                
                <br />

                <WaveSection
                    title="GESTÃO E OTIMIZAÇÃO DE PROCESSOS| Aumente sua Capacidade de Geração de Valor"
                    description="Maximize o valor de suas operações com práticas de gestão e otimização de 
                    processos adaptadas às necessidades do seu negócio. 
                    Implementamos modelos eficazes de agilidade, qualidade e segurança, 
                    apoiados por métricas de desempenho e uma equipe experiente:"
                    listItems={[
                        '<strong>DevSecOps Implementation Model:</strong> Integre segurança ao longo do ciclo de desenvolvimento, assegurando produtos mais seguros e processos mais ágeis. Monitoramos a eficácia por meio de métricas como redução de vulnerabilidades e melhorias na entrega contínua.',
                        '<strong>Quality Assurance Implementation Model:</strong> Assegure que seus produtos atendam aos mais altos padrões com práticas robustas de garantia de qualidade. Indicadores de sucesso incluem a redução de defeitos e aumento na satisfação do cliente.',
                        '<strong>Business Agility:</strong> Adapte seu negócio às mudanças do mercado com práticas ágeis customizadas para sua organização. Medimos o impacto com a melhoria do time-to-market e a capacidade de resposta a novas demandas.',
                        '<strong>Value Stream Mapping:</strong> Elimine desperdícios e aumente a eficiência com a análise detalhada dos seus processos. O sucesso é medido por meio de indicadores como a redução de lead time e o aumento no valor entregue ao cliente.'
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

                <p className='text-2xl mt-12 pb-12'>
                    Pronto para transformar suas ideias em realidade? 
                    Entre em contato conosco hoje mesmo e descubra como a <strong className='text-primaryBlue'>Wave Business & Process</strong> pode impulsionar a inovação e o crescimento na sua organização.
                </p>
            </div>
    </>
  );
};

export default WaveBusiness;