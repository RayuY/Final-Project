import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./UserRestaurantInfo.css";

function UserRestaurantInfo({ restaurant }) {
  const [reservation, setReservation] = useState([]);

  const user = {
    id: 3
  }

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

  const spotReservation = reservation[reservation.length - 1].id;

  const userId = user.id;
  const restaurantId = restaurant.id;
  const partySize = 2;

  function handleSubmit() {
    const newReservation = { userId, restaurantId, partySize }
    console.log("newRest:", newReservation)
    axios
      .post(`http://localhost:8000/reservations`, newReservation)
      .catch((e) => console.error(`Error: ${e}`));
  }

  let review = '⭐'
  let noReview = 'No reviews yet.'

  return (

    <div className="owner_restaurant_info_outer">
      <div className="owner_restaurant_info">
        <div className="owner_restaurant_info_container">
          <div className="owner_restaurant_info_title">
            <div className="owner_restaurant_info_description p__opensans">
              <h3>Restaurant Review :{restaurant.review ? review.repeat(restaurant.review) : noReview}</h3>
            </div>
          </div>
          <div className="owner_restaurant_info_description p__opensans">
            <p>Restaurant Description:</p>
            <h3>{restaurant.description}</h3>
          </div>
          <div className="owner_restaurant_info_address p__opensans">
            <p>Address:</p>
            <h3>{restaurant.address}</h3>
          </div>
          <div className="owner_restaurant_info_address p__opensans">
            <h4>Table avaliable for party of 2 : {restaurant.spot2}</h4>
            <h4>Table avaliable for party of 4 : {restaurant.spot4}</h4>
            <h4>Table avaliable for party of 6 : {restaurant.spot6}</h4>
          </div>
        </div>
        <div>
          <img className="owner_restaurant_info_image" src={restaurant.img} />
        </div>
      </div>
      <Link to={`/reservations/${spotReservation + 1}`}>
      <button
        className="custom__button"
        onClick={handleSubmit}
      >
        Reserve table !
      </button>

      </Link>
    </div >
  );
}

export default UserRestaurantInfo;
