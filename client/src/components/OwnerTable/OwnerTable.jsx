import React from "react";

import "./OwnerTable.css";

function OwnerTable() {
  return (
    <div className="owner_table">
      <div className="owner_table_main">
        <div className="owner_table_num_of_seats">
          <h2>Number of Seats</h2>
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
            <h2>Number of Tables</h2>
            <div className="num_of_tables">
              <input type="table_value_2" placeholder="0" />
              <input type="table_value_4" placeholder="0" />
              <input type="table_value_6" placeholder="0" />
            </div>
          </ul>
        </div>
      </div>

      <div>
        <button className="custom__button">List tables!</button>
      </div>
    </div>
  );
}

export default OwnerTable;
