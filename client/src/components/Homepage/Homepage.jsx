
import React, { useState, useEffect } from "react";
import "./Homepage.css";
import axios from "axios";
import Slider from "react-slick";
import Row from "./Row"; 


const Homepage = () => {

  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurants")
      .then((res) => {
        setRestaurant(res.data.restaurants);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const row1 = Row(restaurant, 0, 12)
  const row2 = Row(restaurant, 12, 23)
  const row3 = Row(restaurant, 23, 35)

  if (restaurant.length === 0) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="background">
      <div className="restaurants">
        <h1 className='p__opensans'></h1>
        <Slider  {...settings}>
          {row1}
        </Slider>
        <h1 className='p__opensans'></h1>
        <Slider  {...settings}>
          {row2}
        </Slider>
        <h1 className='p__opensans'></h1>
        <Slider  {...settings}>
          {row3}
        </Slider>
      </div>
    </div>
  );
};

export default Homepage;
