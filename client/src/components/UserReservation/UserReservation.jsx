import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserReservation.css";
import { images } from "../../constants";
import User from "../User/User";

function UserReservation({ userObj }) {
  const [reservationInfo, setReservationInfo] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const restId = useParams();
  const resId = Number(restId.id);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8000/reservations"),
      axios.get("http://localhost:8000/restaurants"),
      axios.get("http://localhost:8000/users"),
    ])
      .then((all) => {
        setReservationInfo(all[0].data.reservations);
        setRestaurantInfo(all[1].data.restaurants);
        setUserInfo(all[2].data);
      })

      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  if (reservationInfo.length === 0) {
    return null;
  }
  if (restaurantInfo.length === 0) {
    return null;
  }
  if (userInfo.length === 0) {
    return null;
  }

  const reservation1 = reservationInfo[resId - 1];  // index - 1 to get first item in array

  const userId = reservation1.user_id;
  const restaurantId = reservation1.restaurant_id;

  const name1 = userInfo.users.find((i) => i.id === userId);

  const userName = name1.name;

  const rest1 = restaurantInfo.find((i) => i.id === restaurantId);

  const restaurantName = rest1.title;
  const restaurantImg = rest1.img;
  const restaurantAddress = rest1.address;
  const restaurantPhone = rest1.phone;

  return (
    <div className="res_div">
      <div className="res_panel">
        <h2>Your Reservation has been confirmed!</h2>
        <h2 className="res_user">{userName}</h2>
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
        <img className="restaurantimg" src={restaurantImg} />
        <h1 className="res_name">{restaurantName}</h1>
        <h3>{restaurantAddress}</h3>
        <h3 className="res_phone">250-669-6969</h3>
      </div>
      <div className="res_bottom_links">
        <button className="custom__button">Home Page</button>
        <button className="custom__button">Cancel Reservation</button>
      </div>
    </div>
  );
}

export default UserReservation;
