import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Restaurant.css";
import { images } from "../../constants";
import UserRestaurantInfo from "../UserRestaurantInfo/UserRestaurantInfo";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurants")
      .then((res) => {
        setRestaurant(res.data.restaurants[`${id - 1}`]);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);


  console.log(restaurant)
  if (restaurant.length === 0) {
    return null;
  }

  return (
    <div className="owner_page">
      <div className="owner_page_top_split">
        <div className="owner_page_top">
          <h3>Welcome</h3>
          <h1>{restaurant.title}</h1>
          <div className="owner_page_spoon">
            <img
              src={images.spoon}
              className="spoon__img"
              style={{ marginTop: 15, transform: "rotate(180deg)" }}
            />
            <img
              src={images.spoon}
              className="spoon__img"
              style={{ marginTop: 15 }}
            />
          </div>
        </div>
        <div className="owner_page_add"></div>
      </div>

      <div className="owner_page_restaurant">
        {/* <UserReservation /> */}
        <UserRestaurantInfo restaurant={restaurant}/>
      </div>

      <div className="owner_bottom_links">
        <button className="custom__button">View reservation</button>

        <Link to={"/"}>
          <button className="custom__button">Back to main page</button>
        </Link>
      </div>
    </div>
  );
};

export default Restaurant;
