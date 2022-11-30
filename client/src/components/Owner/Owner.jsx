import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  useParams,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { images } from "../../constants";
import "./Owner.css";
import OwnerRestaurant from "../OwnerRestaurant/OwnerRestaurant";
import OwnerRestaurantInfo from "../OwnerRestaurantInfo/OwnerRestaurantInfo";
import OwnerTable from "../OwnerTable/OwnerTable";
import { IdContext } from "../../IdContext";
import OwnerReservation from "../OwnerReservation/OwnerReservation";

const Owner = () => {
  const [state, setState] = useState([]);
  const { id } = useParams();

  const test = useContext(IdContext);


  const [ownerView, setOwnerView] = useState("OwnerRestaurant")

  


  useEffect(() => {
    // axios.get(`http://localhost:8000/owners/:${id}`);
    axios
      .get(`http://localhost:8000/owners/${id}`)
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
          { ownerView === "OwnerRestaurant" && <OwnerRestaurant setOwnerView={setOwnerView} /> }  
          { ownerView === "OwnerRestaurantInfo" && <OwnerRestaurantInfo setOwnerView={setOwnerView} /> }  
          { ownerView === "OwnerTable" && <OwnerTable setOwnerView={setOwnerView} /> }  
          { ownerView === "OwnerReservation" && <OwnerReservation setOwnerView={setOwnerView} /> }  

      </div>



      <div className="owner_bottom_links">
        <button className="custom__button" onClick={() => setOwnerView("OwnerReservation")} >See listed tables</button>
        <button className="custom__button" onClick={() => setOwnerView("OwnerRestaurant")}>Back to main page</button>
      </div>
    </div>
  );
};

export default Owner;
