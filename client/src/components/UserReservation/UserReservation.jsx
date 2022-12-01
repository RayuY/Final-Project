import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


function UserReservation(props) {

  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const { id } = useParams();
  const userId = Number(id);



  useEffect(() => {
    axios
      .get('http://localhost:8000/restaurants')
      .then((res) => {
        setRestaurantInfo(res.data.restaurants);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const restaurant = restaurantInfo.find((i) => i.user_id === userId);

  if (restaurantInfo.length === 0) {
    return null;
  }


  return (

    <div>
      {restaurant.title}
      {restaurant.address}
    </div>


  );
}

export default UserReservation;