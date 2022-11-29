import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis accusamus aspernatur nobis sint, quibusdam iusto perferendis reprehenderit, numquam ex explicabo fugiat at? Iste eum odio repudiandae aliquid ea ratione?</p>
      </div>

      <div className="app__aboutus-content_img flex__center">
        <img src={images.aboutImg} alt="about_img" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ea debitis non harum excepturi quis est praesentium enim alias temporibus blanditiis, optio, voluptatum beatae totam omnis, maiores pariatur cumque assumenda!</p>
      </div>
    </div>
  </div>
);

export default AboutUs;