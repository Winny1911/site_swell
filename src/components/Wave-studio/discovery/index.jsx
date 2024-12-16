import React, { useState } from 'react';
import WaveSection from '../wave-items/wave-section';
import ContactButton from '../../ui/ContactButton';
import ContactFormModal from '../../Contact-Modal';
import { useTranslation } from 'react-i18next';

const WaveDiscovery = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <div id="discovery" className="scrollUp" style={{ background: 'linear-gradient(180deg, rgba(65, 163, 224, 0.94) 28.89%, rgba(160, 209, 240, 0.94) 53.75%, rgba(255, 255, 255, 0.94) 76.8%)' }}>
            <div className='container d-flex items-center justify-center position-relative md:justify-end xl:justify-evenly py-12'>
                                
                <div className='xl:w-[50%]'></div>
                
                <div className='z-1'>
                    <h2 className='text-white px-4 md:text-[32px] md:text-left md:pl-4'>Wave Discovery</h2>
                    <h4 className="text-[28px] mt-3 px-4 md:text-left md:pl-4 hk-darkblue">
                    {   t('WaveStudio.Discovery.TitlePart1')}
                        <br />
                    {   t('WaveStudio.Discovery.TitlePart2')}
                    </h4>


                    <p className='text-2xl text-justify px-4 mt-12 md:w-[470px]'>
                        {t('WaveStudio.Discovery.Introduction.Part1')}
                        <strong>{t('WaveStudio.Discovery.Introduction.StrongPart')}</strong>
                        {t('WaveStudio.Discovery.Introduction.Part2')}
                    </p>


                    <ContactButton onClick={openModal} className={"mx-4"}>
                            {t('Send')}
                    </ContactButton>
                </div>
            </div>

        </div>
            <div className='container text-2xl pb-12'>
                <p className='' style={{ marginTop: '10rem' }}>
                    {t('WaveStudio.Discovery.Benefits.Title')}
                    <strong>{t('WaveStudio.Discovery.Benefits.StrongPart')}</strong>
                    {t('WaveStudio.Discovery.Benefits.Title.1')}
                </p>

                <ul className='list-disc pl-10'>
                    <li>{t('WaveStudio.Discovery.Benefits.List0')}</li>
                    <li>{t('WaveStudio.Discovery.Benefits.List1')}</li>
                    <li>{t('WaveStudio.Discovery.Benefits.List2')}</li>
                    <li>{t('WaveStudio.Discovery.Benefits.List3')}</li>
                    <li>{t('WaveStudio.Discovery.Benefits.List4')}</li>
                </ul>

                <p className='mt-12'>{t('WaveStudio.Discovery.Benefits.OperatingModel')}</p>

                <WaveSection type="Discovery" sectionKey="Model1" />
 
                <br />

                <WaveSection type="Discovery" sectionKey="Model2" />

                <br />

                <WaveSection type="Discovery" sectionKey="Model3" />

                <br />

                <WaveSection type="Discovery" sectionKey="Model4" />

                <br />

                <WaveSection type="Discovery" sectionKey="Model5" />

                <p className='text-2xl text-justify'>
                    <strong>{t('WaveStudio.ContractTerms.Title')}</strong> {t('WaveStudio.ContractTerms.Description')}
                </p>


                <ContactButton onClick={openModal}>
                        {t('Send')}
                </ContactButton>

                <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />

                <p className='text-2xl mt-12'> {t('WaveStudio.Discovery.ContactUs.Title')}</p>
                <p dangerouslySetInnerHTML={{ __html: t('WaveStudio.Discovery.ContactUs.Description')
                    }}
                />

            </div>
    </>
  );
};

export default WaveDiscovery;