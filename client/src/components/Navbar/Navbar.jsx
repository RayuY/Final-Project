import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
      <Link to={"/"}> 
        <img src={images.tablebae} alt="app logo" />
      </Link>
      </div>
      <div className='app__navbar-login'>
        {/* <a href="#login" className='p__opensans'>Login</a> */}
        <h1 className='p__opensans'><Link to={"/login"}> Login</Link></h1>
        <div></div>
        <h1 className='p__opensans'><Link to={"/register"}> Register</Link></h1>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><Link to={"/"}> Home</Link></li>
              <li className='p__opensans'><Link to={"/AboutUs"}>About Us </Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar