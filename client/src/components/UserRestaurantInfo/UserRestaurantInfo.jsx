import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./UserRestaurantInfo.css";

function UserRestaurantInfo( {restaurant }) {

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
          </div>
        </div>
        <div>
          <img className="owner_restaurant_info_image" src={restaurant.img} />
        </div>
      </div>
      <button
        className="custom__button"
        onClick={() => restaurant.setOwnerView("OwnerRestaurant")}
      >
        Reserve table !
      </button>
    </div>
  );
}

export default UserRestaurantInfo;
