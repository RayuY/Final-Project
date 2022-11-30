import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <h2 className="owner_table_name">Restaurant Name Here  :D</h2>
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
                1
              ) : (
                <input type="table_value_2" placeholder="0" />
              )}
              {reservationItem === 4 ? (
                1
              ) : (
                <input type="table_value_2" placeholder="0" />
              )}
              {reservationItem === 6 ? (
                1
              ) : (
                <input type="table_value_2" placeholder="0" />
              )}

              {/* <input type="table_value_2" placeholder="0" />
              <input type="table_value_4" placeholder="0" />
              <input type="table_value_6" placeholder="0" /> */}
            </div>
          </ul>
        </div>
      </div>

      <div className="button_list_tables">
        <button className="custom__button" onClick={() => props.setOwnerView("OwnerTable")} >Edit tables!</button>
      </div>
    </div>
  );
}

export default OwnerReservation;
