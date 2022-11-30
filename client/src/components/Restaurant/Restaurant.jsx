import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/restaurants/${id}`)
      .then((res) => {
        setRestaurant(res.data.restaurants[0]);
        console.log("--------------");
        console.log("res.data", res.data.restaurants[0]);
        console.log("--------------");
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const restaurantPage = restaurant;
  console.log(restaurantPage);
  console.log(restaurantPage.title);


  return (
    <div>
      {restaurantPage.title}
      <img
        src={restaurantPage.img}
        alt="Restaurant info"
      />
    </div>
  );
}

export default Restaurant;