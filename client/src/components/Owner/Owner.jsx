import React, { useState, useEffect } from "react";
import axios from "axios";

import { images } from "../../constants";
import "./Owner.css";
import OwnerRestaurant from "../OwnerRestaurant/OwnerRestaurant";
import OwnerRestaurantInfo from "../OwnerRestaurantInfo/OwnerRestaurantInfo";
import OwnerTable from "../OwnerTable/OwnerTable";

const Owner = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    // axios.get(`http://localhost:8000/owners/:${id}`)
    axios
      .get(`http://localhost:8000/owners/1`)
      .then((res) => {
        setState(res.data.owners);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const owner = state.map((element, index) => {
    return <h1 key={index}>{element.name}</h1>;
  });

  return (
    <div className="owner_page">
      <h3>Hello</h3>
      {owner}
      <div className="owner_page_restaurant">
        {/* <OwnerRestaurant /> */}
        {/* <OwnerRestaurantInfo /> */}
        {<OwnerTable />}
      </div>
    </div>
  );
};

export default Owner;
