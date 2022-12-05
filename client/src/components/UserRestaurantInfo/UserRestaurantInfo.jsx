import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./UserRestaurantInfo.css";

function UserRestaurantInfo({ restaurant }) {
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
  console.log("L28 all reservation: ", reservation);
  const spotReservation = reservation[reservation.length - 1].id; //gets the last index in the array to get id
  console.log("L30 spotreservation last id of index========= ", spotReservation);
  const newRes = reservation.find((i) => i.id === spotReservation); //returns object with id of spot reservation(last reservation)
  console.log("L32 newRes object with id = spotReservation ======", newRes);

  console.log("L34 newRes.restaurant_id", newRes.restaurant_id);  //last reservations restaurant_id... needed?

  const userId = user.id;               // good
  const restaurantId = restaurant.id;   // good
  const partySize = 2;                  // good


  // const resSomething = reservation.find((i) => i.id === spotReservation); // same as 31 hahahaha delete!!
  // console.log("L42 resSomething ======", resSomething);
  // const resSomethingId = resSomething.id;                                 // probably not needed hahaha
  // console.log("L44 resSomeID ======", resSomethingId);

  const newId = (newRes.id + 1);                // grabs last reservation id + 1 for the new reservations url 
  console.log("L47 newId =======", newId);      // first booking only 2 reservations => r/3 => cancel => 2 + 1 => r/3 


  function handleSubmit() {
    const newReservation = { userId, restaurantId, partySize };
    console.log("newRest:", newReservation);
    axios
      .post(`http://localhost:8000/reservations`, newReservation)
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
      {/* <Link to={`/reservations/${resSomething}`}> */}
      {/* <Link to={`/reservations/${spotReservation + 1}`}> */}
      <Link to={`/reservations/${newId}`}>
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
