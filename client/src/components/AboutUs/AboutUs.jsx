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
        <p className="p__about">Experienced in business management and project management. Loves long walks on the beach.</p> <p className='p__about'> He also loves puns!! He thinks they're punny!!!!!</p>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant ">Matt Wilson</h1>
        <img src={images.matt} alt="profile_pic" className="profile__img" />
        <p className="p__about">Matt roared towards them with speed and violence they had not anticipated. They both turned to run but by that time it was too late. The wave crashed into their legs sweeping both of them off of their feet.</p>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Ray Yu</h1>
        <img src={images.ray} alt="profile_pic" className="profile__img" />
        <p className="p__about">Ray heard the song coming from a distance, lightly floating over the air to his ears. Although it was soft and calming, he was wary. It seemed a little too soft and a little too calming for everything that was going on. </p>
      </div>
    </div>
  </div>
);

export default AboutUs;