import React, { useState, useEffect, useRef } from "react";
import "./Homepage.css";
import axios from "axios";
import { images } from "../../constants";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

const Homepage = () => {
  const [restaurant, setRestaurant] = useState([]);

  const scrollRef = useRef(null); //

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

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




      {/* <div className="app__gallery-images">
        <div className="app__gallery-images_container">
        <div className="content">{displayRestaurants}</div>
        <img
          className="image"
          src={images.RestaurantHomepage}
          alt="Restaurant interior"
        />
        </div>
        <div className="app__gallery-images_arrow">
          <h1>test</h1>
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />

        </div>
      </div> */}




      {/* {displayRestaurants} */}
    </div>
  );
};

export default Homepage;
