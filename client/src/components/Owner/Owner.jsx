import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { images } from "../../constants";
import "./Owner.css";
import OwnerRestaurant from "../OwnerRestaurant/OwnerRestaurant";
import OwnerRestaurantInfo from "../OwnerRestaurantInfo/OwnerRestaurantInfo";
import OwnerTable from "../OwnerTable/OwnerTable";

const Owner = () => {
  const [state, setState] = useState([]);
  const id = useParams();

  console.log("id:", id);

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
      <div className="owner_page_spoon">
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15, transform: "rotate(180deg)" }}
        />
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
      </div>

      <div className="owner_page_restaurant">
        {/* <OwnerRestaurant /> */}
        {/* <OwnerRestaurantInfo /> */}
        {<OwnerTable />}
      </div>

      <div className="owner_bottom_links">
      <button className="custom__button">See listed tables</button>
      <button className="custom__button">Back to main page</button>
      </div>
    </div>
  );
};

export default Owner;
