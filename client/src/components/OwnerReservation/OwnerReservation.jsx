import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./OwnerReservation.css";

function OwnerReservation(props) {
  const [reservation, setReservation] = useState([]);
  const id = Number(props.id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/restaurants`)
      .then((res) => {
        setReservation(res.data.restaurants);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const spotReservation = reservation.find((i) => i.owner_id === id)

  if (!spotReservation) {
    return null;
  }

  return (
    <>
      <div className="owner_table">
        <h2 className="owner_table_name ">Currently Listed Tables</h2>
        <div className="owner_table_main">
          <div className="owner_table_num_of_seats p__opensans">
            <h3>Table Size</h3>
            <ul className="list_of_seats">
              <h3>
                <li>2</li>
                <li>4</li>
                <li>6</li>
              </h3>
            </ul>
          </div>

          <div className="owner_table_num_of_tables p__opensans">
            <ul>
              <h3>Number of Tables</h3>
              <div className="num_of_tables">
                <h3>{spotReservation.spot2}</h3>
                <h3>{spotReservation.spot4}</h3>
                <h3>{spotReservation.spot6}</h3>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="button_list_tables">
        <button
          className="custom__button"
          onClick={() => props.setOwnerView("OwnerTable")}
        >
          Edit Tables
        </button>
      </div>
    </>
  );
}

export default OwnerReservation;
