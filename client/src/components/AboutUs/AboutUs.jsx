import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
    <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Aldwin Bautista</h1>
        <img src={images.aldwin} alt="profile_pic" className="profile__img" />
        <p className="p__about">Experienced in CAD softwares and project management.</p> <p className='p__about'>Loves long walks on the beach. Thinks puns are punny!!</p>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant ">Matt Wilson</h1>
        <img src={images.matt} alt="profile_pic" className="profile__img" />
        <p className="p__about">Previous Career in Retail Department Management.</p> <p className='p__about'> "Whatever you do. always give 100%... Unless you're donating blood."</p>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Ray Yu</h1>
        <img src={images.ray} alt="profile_pic" className="profile__img" />
        <p className="p__about">Previously a sushi chef and warehouse associate. Ray loves sushi and dad jokes.</p> <p className='p__about'> "Tequila may not fix your life.. but it's worth a shot."</p>
      </div>
    </div>
  </div>
);

export default AboutUs;