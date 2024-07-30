import React from 'react';
import BoasVindasVideo from '../../assets/BoasVindasVideo.mp4'
import SwellFlux from '../../assets/images/nossa-historia-pt.gif'
import './style.css';

const About = () => {
  return (
    <>
        <video className="video-fill webkit-fill" autoPlay muted loop>
            <source src={BoasVindasVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="container small-container gap-0">
            "          
                <p>Com mais de 20 anos de experiência, cultivamos uma comunidade de talentos diversos, impulsionada pela inovação e dedicada a fornecer soluções personalizadas. Nossa jornada tecnológica é marcada pela contínua evolução, onde cada avanço nos leva mais perto do amanhã.</p>
            "
        </div>

        <div className="section-wrapper">
            <img src={SwellFlux} className="container small-container gap-0" alt="swell-flux" />
        </div>

        <div className='container small-container pt-7 gap-0'>
            <h2 className='mb-5'>A Swell</h2>

            <p>
                Somos a <span className='blue-text'>Swell It Solutions</span> Mais do que uma consultoria em Tecnologia e Gestão, uma comunidade de talentos diversos. Unidos pela paixão em superar desafios complexos, nosso DNA é uma mistura inigualável de inovação, expertise e comprometimento.
            </p>

            <div>
                <h2 className='dark-title'>Nossa Experiência de Mais de 20 Anos</h2>
                <p>
                    Com uma sólida história de mais de duas décadas no mercado, <span className='blue-text'>a Swell It Solutions</span> acumulou uma vasta experiência em Desenvolvimento e Gestão de Software. Nossa jornada é marcada por parcerias de sucesso com uma ampla gama de setores, desde Startups ágeis e inovadoras até grandes Empresas.
                </p>
            </div>

            <div>
                <h2 className='dark-title'>A Jornada da Inovação</h2>
                <p>
                    Somos pioneiros na aplicação das últimas tendências em tecnologia e melhores práticas de gestão, adaptando-as às necessidades específicas de nossos clientes.
                </p>
            </div>


            <div>
                <h2 className='dark-title'>Nossa Abordagem Holística</h2>
                <p>
                    Nossa abordagem holística nos diferencia pois não apenas entregamos soluções, mas também criamos parcerias duradouras baseadas na confiança mútua. Colaboramos de perto com nossos clientes, entendendo profundamente seus objetivos e desafios para oferecer soluções sob medida que impulsionam o sucesso a longo prazo.
                </p>
            </div>

            <div>
                <h2 className='dark-title'>Um Mundo de Possibilidades</h2>
                <p className='mb-0'>Na <span className='blue-text'>Swell It Solutions</span>, acreditamos que não há desafio muito grande nem problema muito complexo. Cada desafio é uma oportunidade de inovação, cada problema uma porta para soluções criativas. Construímos nossa jornada de constante evolução, onde o futuro é moldado por nossa paixão pela tecnologia e nossa dedicação ao seu sucesso. </p>
                <p>Juntos, estamos prontos para explorar um mundo infinito de possibilidades.</p>  
            </div>

            <div className='center-div pt-5 pb-5'>
                <span>-</span>
                <p className='blue-text'>Ride the Waves</p>
            </div>
        </div>
    </>
  );
};

export default About;
