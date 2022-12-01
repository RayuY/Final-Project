import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./OwnerReservation.css";

function OwnerReservation(props) {
  const [reservation, setReservation] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/reservations/${id}`)
      .then((res) => {
        setReservation(res.data.reservations[0]);
        console.log("--------------");
        console.log("res.data", res.data.reservations[0]);
        console.log("--------------");
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const reservationItem = reservation.party_size;

  return (
    <div className="owner_table">
      <h2 className="owner_table_name">Listed tables</h2>
      <div className="owner_table_main">
        <div className="owner_table_num_of_seats">
          <h3>Number of Seats</h3>
          <ul className="list_of_seats">
            <h3>
              <li>2</li>
              <li>4</li>
              <li>6</li>
            </h3>
          </ul>
        </div>

        <div className="owner_table_num_of_tables">
          <ul>
            <h3>Number of Tables</h3>
            <div className="num_of_tables">
              {reservationItem === 2 ? (
                <h3>1</h3>
              ) : (
                <h3>0</h3>
              )}
              {reservationItem === 4 ? (
                <h3>1</h3>
              ) : (
                <h3>0</h3>
              )}
              {reservationItem === 6 ? (
                <h3>1</h3>
              ) : (
                <h3>0</h3>
              )}

            </div>
          </ul>
        </div>
      </div>

      <div className="button_list_tables">
        <button
          className="custom__button"
          onClick={() => props.setOwnerView("OwnerTable")}
        >
          Edit tables!
        </button>
      </div>
    </div>
  );
}

export default OwnerReservation;
