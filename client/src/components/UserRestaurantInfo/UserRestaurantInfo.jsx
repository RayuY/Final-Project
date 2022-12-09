import React, { useState, useEffect, useContext  } from "react";
import { UserContext } from '../../UserContext';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserRestaurantInfo.css";

import Modal from "./Modal";

function UserRestaurantInfo({ restaurant }) {

  const { userR, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const [reservation, setReservation] = useState([]);

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

  let review = '⭐';
  let noReview = 'No reviews yet.';
  

  return (
    <>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
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
            <button
              className="openModalBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <img className="owner_restaurant_info_image" src={restaurant.img} alt='rest-info-img' />
            </button>
          </div>
        </div>
      </div>
      {userR !== 'Guest' &&
      <button
        className="custom__button"
        onClick={handleSubmit}
      >
        Reserve table !
      </button>
            }
    </>
  );
}

export default UserRestaurantInfo;
