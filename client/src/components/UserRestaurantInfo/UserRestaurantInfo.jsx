import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import "./UserRestaurantInfo.css";


function UserRestaurantInfo(props) {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const { id } = useParams();
  const userId = Number(id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/restaurants`)
      .then((res) => {
        setRestaurantInfo(res.data.restaurants);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const restaurant = restaurantInfo.find((i) => i.user_id === userId);

  if (!restaurant) {
    return null;
  }


  return (
    <div className="owner_restaurant_info_outer">
    <div className="owner_restaurant_info">
      <div className="owner_restaurant_info_container">
        <div className="owner_restaurant_info_title">
          <h1>{restaurant.title}</h1>
        </div>
        <div className="owner_restaurant_info_description">
          <p>Description:</p>
          <h3>{restaurant.description}</h3>
        </div>
        <div className="owner_restaurant_info_address">
          <p>Address:</p>
          <h3>restaurants address here</h3>
        </div>
      </div>
      <div>
        <img className="owner_restaurant_info_image" src={restaurant.img} />
      </div>
    </div>
    <button
      className="custom__button"
      onClick={() => props.setOwnerView("OwnerRestaurant")}
    >
      Reserve table !
    </button>
  </div>
  )
}

export default UserRestaurantInfo
