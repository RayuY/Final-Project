
import React, { useState, useEffect, useContext } from "react";
import "./Homepage.css";
import axios from "axios";
import Slider from "react-slick";
import Row from "./Row"; 

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

  const row1 = Row(restaurant, 0, 10)
  const row2 = Row(restaurant, 10, 20)
  const row3 = Row(restaurant, 20, 28)

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
