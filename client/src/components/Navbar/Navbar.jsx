import React, { Fragment } from 'react';
import { useState, useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import './Nav.css';
import { useParams } from 'react-router-dom';

const Navbar = () => {

  const restId = useParams();
  const resId = Number(restId.id);


  const { user, setUser } = useContext(UserContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  let person = {
    'User 1': "Matt",
    'User 2': "Aldwin",
    'Owner 1': "Ray",
    'Owner 2': "Gary"
  };
  function roleChange() {
    if (user === 'Guest') {
      setUser('User 1');
    }
    if (user === 'User 1') {
      setUser('User 2');
    }
    if (user === 'User 2') {
      setUser('Owner 1');
    }
    if (user === 'Owner 1') {
      setUser('Owner 2');
    }
    if (user === 'Owner 2') {
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
      {user === "User 1" &&
        <ul className="app__navbar-links">
          <li className='p__opensans'><Link to={"/reservations/1"}> Your Reservations</Link></li>
        </ul>
      }
      {user === "User 2" &&
        <ul className="app__navbar-links">
          <li className='p__opensans'><Link to={`/reservations/${resId}`}> Your Reservations</Link></li>
        </ul>
      }
      {user === "Owner 1" &&
        <div className="app__navbar-links">
          <li className='p__opensans'><Link to={"/owners/1"}> Manage Restaurants</Link></li>
        </div>
      }
      {user === "Owner 2" &&
        <div className="app__navbar-links">
          <li className='p__opensans'><Link to={"/owners/5"}> Manage Restaurants</Link></li>
        </div>
      }

      <div className='app__navbar-login'>
        {user === 'Guest' ?
          <Fragment>
            <h1 className='p__opensans'><Link to={"/login"}>Login</Link></h1>
            <div></div>
            <h1 className='p__opensans'><Link to={"/register"}>Register</Link></h1>
            <Link to={"/"}>
              <button className='button-85' onClick={roleChange}>Viewing as {user}</button></Link>
          </Fragment>
          :
          <Fragment>
            <h1 className='p__opensans'>Welcome Back <em>{person[user]}</em></h1>
            <Link to={"/"}>
              <button className='button-85' onClick={roleChange}>Viewing as {user}</button></Link>
          </Fragment>}

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