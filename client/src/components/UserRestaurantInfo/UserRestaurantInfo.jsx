import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./UserRestaurantInfo.css";

function UserRestaurantInfo({ restaurant }) {

  const user = {
    id: 3
  }

  const userId = user.id;
  const restaurantId = restaurant.id;
  const partySize = 2;

  console.log("newReservation:", userId, restaurantId, partySize);

  function handleSubmit() {
    const newReservation = { userId, restaurantId, partySize }
    console.log("newRest:", newReservation)
    axios
      .post(`http://localhost:8000/reservations`, newReservation)
      // .then((res) => props.setOwnerView("UserReservation"))
      .catch((e) => console.error(`Error: ${e}`));
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
            <h3>{restaurant.address}</h3>
            <h4>Table for 2: {restaurant.spot2}</h4>
            <h4>Table for 4: {restaurant.spot4}</h4>
            <h4>Table for 6: {restaurant.spot6}</h4>
          </div>
        </div>
        <div>
          <img className="owner_restaurant_info_image" src={restaurant.img} />
        </div>
      </div>
      <Link to={"/reservations/1"}>
      <button
        className="custom__button"
        onClick={handleSubmit}
      >
        Reserve table !
      </button>
      </Link>
    </div>
  );
}

export default UserRestaurantInfo;
