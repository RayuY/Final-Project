import React from "react";

import { images } from "../../constants";
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="content">MattAldwinRay's Restaurants go here</h1>
      <img className="image" src={images.RestaurantHomepage} alt="Restaurant interior" />
    </div>
  );
};

export default Homepage;
