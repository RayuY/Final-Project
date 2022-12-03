import React from 'react';
import { useState, useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import './Nav.css';

const Navbar = () => {

  const { user, setUser } = useContext(UserContext);

  const [toggleMenu, setToggleMenu] = useState(false);



  function roleChange() {
    if (user === 'Guest') {
      setUser('User');
    }
    if (user === 'User') {
      setUser('Owner');
    }
    if (user === 'Owner') {
      setUser('Guest');
    }
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <Link to={"/"}>
          <img src={images.tablebae} alt="app logo" />
        </Link>
      </div>
      {user === "Guest" &&
        <ul className="app__navbar-links">
          <li className='p__opensans'>Welcome Table Bae</li>
        </ul>
      }
      {user === "User" &&
        <ul className="app__navbar-links">
          <li className='p__opensans'><Link to={"/reservations/1"}> Your Reservations</Link></li>
        </ul>
      }
      {user === "Owner" &&
        <div className="app__navbar-links">
          <li className='p__opensans'><Link to={"/owners/1"}> Manage Restaurants</Link></li>
        </div>
      }
      <div className='app__navbar-login'>
        {/* <a href="#login" className='p__opensans'>Login</a> */}
        <h1 className='p__opensans'><Link to={"/login"}> Login</Link></h1>
        <div></div>

        <h1 className='p__opensans'><Link to={"/register"}> Register</Link></h1>
        <Link to={"/"}>
        <button className='button-85' onClick={roleChange}>Viewing as {user}</button>
        </Link>

      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><Link to={"/"}> Home</Link></li>
              <li className='p__opensans'><Link to={"/AboutUs"}>About Us </Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;