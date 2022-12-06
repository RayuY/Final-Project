import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom'

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';


const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">6969 Troll Street, Vancouver</p>
        <p className="p__opensans">+1 778-669-6969</p>
        <p className="p__opensans"></p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.tablebae} alt="footer_logo" />
        <p className="p__opensans">&quot;Never wait for tables again&quot;</p>
        <img src={images.spoon} alt="footer_logo" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">9 am - 5 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <div className='aboutus'>
        <span className='p__opensans '><Link to={"/about"}>About Us</Link></span>
      </div>
        <p className="p__opensans">2022 Table Bae. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;