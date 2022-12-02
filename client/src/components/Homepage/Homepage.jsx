
import React, { useState, useEffect, useRef, useContext } from "react";
import "./Homepage.css";
import { images } from "../../constants";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SliceData from "./helper"; 

import { UserContext } from '../../UserContext';

const Homepage = () => {

  const { user, setUser } = useContext(UserContext);
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurants")
      .then((res) => {
        setRestaurant(res.data.restaurants);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const row1 = SliceData(restaurant, 0, 10)
  const row2 = SliceData(restaurant, 10, 20)
  const row3 = SliceData(restaurant, 20, 32)

  if (restaurant.length === 0) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="background">
      <div className="restaurants">
        <h1 className='p__opensans'>By Price</h1>
        <Slider  {...settings}>
          {row1}
        </Slider>
        <h1 className='p__opensans'>By Location</h1>
        <Slider  {...settings}>
          {row2}
        </Slider>
        <h1 className='p__opensans'>By Cusine Type</h1>
        <Slider  {...settings}>
          {row3}
        </Slider>
      </div>
    </div>
  );
};

export default Homepage;
