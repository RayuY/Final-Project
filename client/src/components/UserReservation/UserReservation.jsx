import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './UserReservation.css';
import { images } from "../../constants";


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

    <div className="res_div">
      <div className="res_panel">
        <h5>Your Reservation has been confirmed</h5>
        <div className="res_div_spoon">
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
        <h4>{restaurant.title}</h4>
        <img className="restaurantimg" src={restaurant.img} />
        <h6>{restaurant.address}</h6>
      </div>
      <div className="res_bottom_links">
        <button className="custom__button">
          Home Page
        </button>
        <button className="custom__button">
          Cancel Reservation
        </button>
      </div>
    </div>


  );
}

export default UserReservation;