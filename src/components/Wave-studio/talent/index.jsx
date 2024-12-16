import React, { useState } from 'react';
import WaveSection from '../wave-items/wave-section';
import ContactButton from '../../ui/ContactButton';
import ContactFormModal from '../../Contact-Modal';
import { useTranslation } from 'react-i18next';

const WaveTalent = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <div id="talent" className="scrollUp" style={{ background: 'linear-gradient(180deg, rgba(65, 163, 224, 0.94) 28.89%, rgba(160, 209, 240, 0.94) 53.75%, rgba(255, 255, 255, 0.94) 76.8%)' }}>
            <div className='container d-flex items-center justify-center position-relative md:justify-end xl:justify-evenly py-12'>
                                
                <div className='xl:w-[50%]'></div>
                
                <div className='z-1'>
                    <h2 className='text-white text-[32px] px-4 md:text-left md:pl-4'>Wave Talent</h2>
                    <h4 className="text-[28px] mt-3 px-4 md:text-left md:pl-4 hk-darkblue">
                    {   t('WaveStudio.Talent.TitlePart1')}
                        <br />
                    {   t('WaveStudio.Talent.TitlePart2')}
                    </h4>

                    <p className='text-2xl text-justify px-4 mt-12 md:w-[470px]'>
                        {t('WaveStudio.Talent.Introduction.Part1')}
                        <strong>{t('WaveStudio.Talent.Introduction.StrongPart')}</strong>
                        {t('WaveStudio.Talent.Introduction.Part2')}
                    </p>

                    <ContactButton onClick={openModal} className={"mx-4"}>
                            {t('Send')}
                    </ContactButton>
                </div>
            </div>

        </div>
            <div className='container text-2xl pb-12'>
                <p className='' style={{ marginTop: '15rem' }}>
                    {t('WaveStudio.Talent.Benefits.Title')}
                    <strong>{t('WaveStudio.Talent.Benefits.StrongPart')}</strong>
                    {t('WaveStudio.Talent.Benefits.Title.1')}
                </p>
                
                <ul className='list-disc pl-10'>
                    <li>{t('WaveStudio.Talent.Benefits.List0')}</li>
                    <li>{t('WaveStudio.Talent.Benefits.List1')}</li>
                    <li>{t('WaveStudio.Talent.Benefits.List2')}</li>
                    <li>{t('WaveStudio.Talent.Benefits.List3')}</li>
                </ul>
            
                <p className='mt-12'>{t('WaveStudio.Talent.Benefits.OperatingModel')}</p>

                <WaveSection type="Talent" sectionKey="Model1" />
 
                <br />

                <WaveSection type="Talent" sectionKey="Model2" />

                <br />

                <p className='text-2xl text-justify'>
                    <strong>{t('WaveStudio.ContractTerms.Title')}</strong> {t('WaveStudio.ContractTerms.Description')}
                </p>

                <ContactButton onClick={openModal}>
                    {t('Send')}
                </ContactButton>

                <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />

                <p className='text-2xl mt-12'> {t('WaveStudio.Talent.ContactUs.Title')}</p>
                <p dangerouslySetInnerHTML={{ __html: t('WaveStudio.Talent.ContactUs.Description')
                    }}
                />
            </div>
    </>
  );
};

export default WaveTalent;