import React, { useEffect, useState } from "react";
import axios from "axios";

import "./OwnerTable.css";

function OwnerTable(props) {
  const userId = Number(props.id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/restaurants`)
      .then((res) => {
        setRestaurantInfo(res.data.restaurants);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [tableNum2, setTableNum2] = useState(0);
  const [tableNum4, setTableNum4] = useState(0);
  const [tableNum6, setTableNum6] = useState(0);

  const restaurant = restaurantInfo.find((i) => i.owner_id === userId);

  if (!restaurant) {
    return null;
  }

  function handleSubmit() {
    const spot2 = Number(tableNum2)
    const spot4 = Number(tableNum4)
    const spot6 = Number(tableNum6)
    const spot = { spot2, spot4, spot6 }

    axios
      .put(`http://localhost:8000/restaurants/${restaurant.id}`, spot)
      .then((res) => props.setOwnerView("OwnerReservation"))
      .catch((e) => console.error(`Error: ${e}`));
  }

  return (
    <div className="owner_table">
      <h2 className="owner_table_name">{restaurant.title}</h2>
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
              <form>
                <input type="table_value_2" value={tableNum2} onChange={(e) => setTableNum2(e.target.value)}placeholder="0" />
                <input type="table_value_4" value={tableNum4} onChange={(e) => setTableNum4(e.target.value)}placeholder="0" />
                <input type="table_value_6" value={tableNum6} onChange={(e) => setTableNum6(e.target.value)} placeholder="0" />
              </form>
            </div>
          </ul>
        </div>
      </div>

      <div className="button_list_tables">
        <button className="custom__button" onClick={handleSubmit}>
          List tables!
        </button>
      </div>
    </div>
  );
}

export default OwnerTable;
