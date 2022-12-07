import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

import "./OwnerRestaurant.css"

function OwnerRestaurant(props) {
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

  const restaurant = restaurantInfo.find((i) => i.owner_id === userId);

  if (!restaurant) {
    return null;
  }
  
  return (
    <div className="owner_restaurant">
      <h1 className="restaurant__title">{restaurant.title}</h1>
      <img className="owner_restaurant_image" src={restaurant.img} onClick={() => props.setOwnerView("OwnerRestaurantInfo")} />
      
    </div>
  );
}

export default OwnerRestaurant;
