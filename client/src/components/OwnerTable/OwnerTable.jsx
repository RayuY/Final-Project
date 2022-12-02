import React, { useContext, useState } from "react";
import { IdContext } from "../../IdContext";
import axios from "axios";

import "./OwnerTable.css";

function OwnerTable(props) {

  const test = useContext(IdContext);

  // const [tableNum, setTableNum] = useState;

  function handleSubmit () {
    const newSpot = { spot: 6 }
    axios
      .put("http://localhost:8000/restaurants/1", newSpot )
      .then(res => console.log(res))
      .catch((e) => console.error(`Error: ${e}`))
  };

  return (
    <div className="owner_table">
      <h2 className="owner_table_name">Restaurant Name {test}</h2>
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
              <input type="table_value_2" placeholder="0" />
              <input type="table_value_4" placeholder="0" />
              <input type="table_value_6" placeholder="0" />
            </div>
          </ul>
        </div>
      </div>

      <div className="button_list_tables">
        {/* <button className="custom__button" onClick={() => props.setOwnerView("OwnerReservation")} >List tables!</button> */}
        <button className="custom__button" onClick={handleSubmit} >List tables!</button>
      </div>
    </div>
  );
}

export default OwnerTable;
