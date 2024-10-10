import React from 'react';
import '../../../app/globals.css';
import FirstSection from '../Homepage-first-section';
import SecondSection from '../Homepage-second-section';
import ThirdSection from '../Homepage-third-section';
import FourthSection from '../Homepage-fourth-section';
import SixthSection from '../Homepage-sixth-section';
import BoasVindasVideo from '../../../assets/BoasVindasVideo.mp4'
import BoasVindasVideoWebm from '../../../assets/BoasVindasVideoWebm.webm'

const HomepageMain = () => {
  return (
    <>
      <video className="video-fill webkit-fill playsInline" autoPlay muted loop>
        {/* <source src={BoasVindasVideo} type="video/mp4" /> */}
        <source src={BoasVindasVideoWebm} type="video/webm" />
        Your browser does not support the video tag.
      </video>


      <div className='container small-container'>
        <FirstSection />
      </div>

       <SecondSection />

      <div className='container small-container'>
        <ThirdSection />
      </div>

      <FourthSection />
      
      <div className='container small-container'>
        {/* <FifthSection  /> */}
        <SixthSection />
      </div>
    </>
  );
}

export default HomepageMain;