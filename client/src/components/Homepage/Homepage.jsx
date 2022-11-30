
import React, { useState, useEffect, useRef, useContext } from "react";
import "./Homepage.css";
import { images } from "../../constants";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import axios from "axios";

import { UserContext } from '../../UserContext';

const Homepage = () => {

  const {user, setUser} = useContext(UserContext)
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurants")
      .then((res) => {
        setRestaurant(res.data.restaurants);
        console.log("--------------");
        console.log("res.data", res.data.restaurants);
        console.log("--------------");
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const displayRestaurants = restaurant.map((restaurant, index) => {
    return (
      <div className="restaurantContainer" key={index}>
        <h1>{restaurant.title}</h1>
        <img src={restaurant.img} alt="restaurant pic" />
      </div>
    );
  });

  return (
    <div>
      <div className="homepage">
        <div className="content">{displayRestaurants}</div>
        <img
          className="image"
          src={images.RestaurantHomepage}
          alt="Restaurant interior"
        />
      </div>

    </div>
  );
};

export default Homepage;
