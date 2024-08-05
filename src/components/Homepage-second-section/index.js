import React from 'react';
import WaveStudio from '../../assets/images/wave-studio.jpg'
import './style.css'

const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="wave-studio container small-container">
          <h2 className='blue-title '>Wave Studio</h2>
        <div className='wave-studio-container'>
          <p>Reunimos a expertise de nossos profissionais para criar uma equipe multidisciplinar que tem como pilares a cultura ágil, a customização de processos e a capacidade de geração de valor. Nosso foco é promover a melhoria contínua e oferecer soluções de negócios únicas para o mercado, agregando qualidade aos produtos e serviços digitais de nossos clientes.</p>
          <img  src={WaveStudio} alt="circulo contendo qualidades da wave studio"/>
        </div>
        <button className="centered-button know-button">VER MAIS</button>
      </div>

      <div className="section-wrapper">
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>DISCOVERY</h2>
            <p>Desde a compreensão do contexto até a definição de objetivos, KPIs, personas, protótipos, e roadmap, garantindo soluções relevantes e eficazes.</p>
          </div>
          <button className="see-more">VER MAIS</button>
        </div>
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>TECH</h2>
            <p>Expertise tecnológica e parceria estratégica para impulsionar a inovação, estabilidade e transformação digital em todas as fases do ciclo de vida do software.</p>
          </div>
          <button className="see-more">VER MAIS</button>
        </div>
        <div className="section discovery-section flex-adjust">
          <div>
            <h2>BUSINESS</h2>
            <p>Soluções fundamentais para aprimoramento contínuo. Catalisadores da transformação dos processos de negócios, garantindo resultados mensuráveis e duradouros.</p>
          </div>
          <button className="see-more">VER MAIS</button>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
