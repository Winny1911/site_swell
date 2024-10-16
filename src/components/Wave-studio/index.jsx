import React, { useState } from 'react';

import WaveStudioWheel from '../../assets/images/wave-studio/wave-studio-transparent.svg';  
import WaveStudioFlux from '../../assets/images/wave-studio/WaveStudioIlustracao.svg';
import WaveTalentIllustration from '../../assets/images/wave-studio/WaveTalentIlustracao.png';

import WaveDiscovery from './discovery';
import WaveTech from './tech';
import WaveBusiness from './business';
import WaveTalent from './talent';

const WaveStudio = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div>
        <div className="bg-wave min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
              <h1 className="text-8xl font-bold text-white">Wave Studio</h1>
              <p className="text-4xl text-white mt-4">Inovação Sob Medida, Resultados Extraordinários.</p>
          </div>
        </div>
        <div className='flex gap-4 flex-col md:flex-row items-center justify-center px-4 md:px-12 py-12' style={{ backgroundColor: '#41A3E0F0' }}>
            <img src={WaveStudioWheel} alt="Wave Studio" />
            <p className="text-white text-justify mt-4 md:w-[507px]">
                Reunimos a expertise de nossos profissionais para criar uma equipe multidisciplinar que 
                tem como pilares a cultura ágil, a customização de processos e a capacidade de geração de valor. 
                Nosso foco é promover a melhoria contínua e oferecer soluções de negócios únicas para o mercado, 
                agregando qualidade aos produtos e serviços digitais de nossos clientes
            </p>
        </div>

        <div>
          <img src={WaveStudioFlux} alt="Wave Studio" className='mx-auto w-[1400px] mb-12 -mt-2 md:-mt-4 lg:-mt-8'/>
        </div>

        <div id="scrollTarget"></div>
        
        {/* Wave Discovery */}
      <div
        id="discovery"
        className={`transition-opacity duration-500 ease-in-out ${activeComponent === 'discovery' || !activeComponent ? 'opacity-100 relative visible' : 'opacity-0 absolute invisible top-0'}`}
      >
        <WaveDiscovery setActiveComponent={setActiveComponent} />
      </div>

      {/* Wave Tech */}
      <div
        id="tech"
        className={`transition-opacity duration-500 ease-in-out ${activeComponent === 'tech' || !activeComponent ? 'opacity-100 relative visible' : 'opacity-0 absolute invisible top-0'}`}
      >
        <WaveTech setActiveComponent={setActiveComponent} />
      </div>

      {/* Wave Business */}
      <div
        id="business"
        className={`transition-opacity duration-500 ease-in-out ${activeComponent === 'business' || !activeComponent ? 'opacity-100 relative visible' : 'opacity-0 absolute invisible top-0'}`}
      >
        <WaveBusiness setActiveComponent={setActiveComponent} />
      </div>

      {/* Wave Talent */}
      <div
        id="talent"
        className={`transition-opacity duration-500 ease-in-out ${activeComponent === 'talent' || !activeComponent ? 'opacity-100 relative visible' : 'opacity-0 absolute invisible top-0'}`}
      >
        <WaveTalent setActiveComponent={setActiveComponent} />
      </div>

      <div>
        <img src={WaveTalentIllustration} alt="Wave Studio" className='mx-auto w-[300px]'/>
      </div>

    </div>
  );
};

export default WaveStudio;