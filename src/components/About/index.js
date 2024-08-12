import React from 'react';
import { useTranslation } from 'react-i18next';
import BoasVindasVideo from '../../assets/BoasVindasVideo.mp4'
import SwellFlux from '../../assets/images/nossa-historia-pt.gif'
import './style.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
        <video className="video-fill webkit-fill" autoPlay muted loop>
            <source src={BoasVindasVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="container small-container gap-0 pt-5 pt-5 text-align-center">
            "          
                <p>{t('swell_description')}</p>
            "
        </div>

        <div className="section-wrapper section-width pd-0">
            <img src={SwellFlux} className="container img-fluid gap-0" alt="swell-flux" />
        </div>

        <div className='container small-container pt-7 gap-0'>
            <h2 className='mb-5'>{t('about_section1_title')}</h2>

            <p dangerouslySetInnerHTML={{ __html: t('about_section1') }} />

            <div>
                <h2 className='dark-title'>{t('about_section2_title')}</h2>

                <p dangerouslySetInnerHTML={{ __html: t('about_section2') }} />

            </div>

            <div>
                <h2 className='dark-title'>{t('about_section3_title')}</h2>
                <p>
                {t('about_section3')}
                </p>
            </div>


            <div>
                <h2 className='dark-title'>{t('about_section4_title')}</h2>
                <p>
                {t('about_section4')}
                </p>
            </div>

            <div>
                <h2 className='dark-title'>{t('about_section5_title')}</h2>
                    
                <p className='mb-0' dangerouslySetInnerHTML={{ __html: t('about_section5') }} />

                <p dangerouslySetInnerHTML={{ __html: t('about_section5.1') }} />

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
