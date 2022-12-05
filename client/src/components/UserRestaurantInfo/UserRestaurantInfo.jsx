import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./UserRestaurantInfo.css";

function UserRestaurantInfo({ restaurant }) {
  const navigate = useNavigate();
  const [reservation, setReservation] = useState([]);

  const restId = useParams();
  const resId = Number(restId.id);

  const user = {
    id: 3
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/reservations`)
      .then((res) => {
        setReservation(res.data.reservations);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  if (reservation.length === 0) {
    return null;
  }

  const partySize = 2;

  function handleSubmit() {
    const newReservation = { userId: user.id, restaurantId: restaurant.id, partySize };
    axios
      .post(`http://localhost:8000/reservations`, newReservation)
      .then((res) => {
        navigate(`/reservations/${res.data.id}`);
      })
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
      <button
        className="custom__button"
        onClick={handleSubmit}
      >
        Reserve table !
      </button>
    </div>
  );
}

export default UserRestaurantInfo;
