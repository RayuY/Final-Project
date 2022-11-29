import React from "react";

import { images } from "../../constants";
import './Homepage.css';

const Homepage = () => {
  return (
    <h1 className='app__navbar'>
      <img src={images.gallery01} alt="app logo" />
      <img src={images.gallery02} alt="app logo" />
      <img src={images.gallery03} alt="app logo" />
      <img src={images.gallery04} alt="app logo" />
    </h1>

    <div className="homepage">
      <h1 className="content">MattAldwinRay's Restaurants go here</h1>
      <img className="image" src={images.RestaurantHomepage} alt="Restaurant interior" />
    </div>

  );
};

export default Homepage;
