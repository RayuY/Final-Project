
import React, { useState, useEffect, useRef, useContext } from "react";
import "./Homepage.css";
import { images } from "../../constants";
import axios from "axios";
import Slider from "react-slick";

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

  // const displayRestaurants = restaurant.map((restaurant, index) => {
  //   return (
  //     <div className="restaurantContainer" key={index}>
  //       <h1>{restaurant.title}</h1>
  //       <img src={restaurant.img} alt="restaurant pic" />
  //     </div>
  //   );
  // });


  const displayRestaurants = restaurant.map((item, index) => {
    return (
      <div key={index} className='card'>
        <div className="card-top">
          <img className='img' src={item.img} alt='rest-img' />
          <h1 className='p__opensans' >{item.title}</h1>
          <p className="category"></p>
        </div>
        <div className="card-bottom">
          <div>
            <h3 className='p__opensans'>Price Range: $ $ $</h3>
            <h3 className='p__opensans'>Reviews: ⭐⭐⭐</h3>
          </div>
          <div>
            <button className='p__opensans' class="glow-on-hover" type="button">Reserve Now</button>
          </div>
        </div>
      </div>

    );
  });

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
          {displayRestaurants}
        </Slider>
        <h1 className='p__opensans'>By Location</h1>
        <Slider  {...settings}>
          {displayRestaurants}
        </Slider>
        <h1 className='p__opensans'>By Cusine Type</h1>
        <Slider  {...settings}>
          {displayRestaurants}
        </Slider>
      </div>
    </div>
  );
};

export default Homepage;
