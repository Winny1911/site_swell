import React from 'react';

import WaveStudioWheel from '../../assets/images/wave-studio/wave-studio-transparent.svg';  
import WaveStudioFlux from '../../assets/images/wave-studio/WaveStudioIlustração.svg';
import WaveTalentIllustration from '../../assets/images/wave-studio/WaveTalentIlustração.svg';

import WaveDiscovery from './discovery';
import WaveTech from './tech';
import WaveBusiness from './business';
import WaveTalent from './talent';

const WaveStudio = () => {
  return (
    <>
        <div className="bg-wave min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
            <h1 className="text-8xl font-bold text-white">Wave Studio</h1>
            <p className="text-4xl text-white mt-4">Inovação Sob Medida, Resultados Extraordinários.</p>
        </div>
        </div>
        <div className='flex gap-4 flex-col md:flex-row items-center justify-center px-4 md:px-12' style={{ backgroundColor: '#41A3E0F0' }}>
            <img src={WaveStudioWheel} alt="Wave Studio" />
            <p className="text-white text-justify mt-4 md:w-[507px]">
                Reunimos a expertise de nossos profissionais para criar uma equipe multidisciplinar que 
                tem como pilares a cultura ágil, a customização de processos e a capacidade de geração de valor. 
                Nosso foco é promover a melhoria contínua e oferecer soluções de negócios únicas para o mercado, 
                agregando qualidade aos produtos e serviços digitais de nossos clientes
            </p>
        </div>

        <img src={WaveStudioFlux} alt="Wave Studio" className='mx-auto w-[1400px]'/>

        <WaveDiscovery />

        <WaveTech />

        <WaveBusiness />

        <WaveTalent />

        <img src={WaveTalentIllustration} alt="Wave Studio" className='mx-auto w-[300px]'/>

    </>
  );
};

export default WaveStudio;