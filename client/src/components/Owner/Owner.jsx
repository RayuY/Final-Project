import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams,
  BrowserRouter as Router,
} from "react-router-dom";

import { images } from "../../constants";
import "./Owner.css";
import OwnerRestaurant from "../OwnerRestaurant/OwnerRestaurant";
import OwnerRestaurantInfo from "../OwnerRestaurantInfo/OwnerRestaurantInfo";
import OwnerTable from "../OwnerTable/OwnerTable";
import OwnerReservation from "../OwnerReservation/OwnerReservation";
import OwnerNew from "../OwnerNew/OwnerNew";
import OwnerEdit from "../OwnerEdit/OwnerEdit"
import { IoMdAddCircle } from "react-icons/io";

const Owner = () => {
  const [state, setState] = useState([]);
  const { id } = useParams();
  const userId = Number(id);

  const [ownerView, setOwnerView] = useState("OwnerRestaurant");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/owners`)
      .then((res) => {
        setState(res.data.owners);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const owner = state.find((i) => i.id === userId);

  if (!owner) {
    return null;
  }

  return (
    <div className="owner_page">
      <div className="owner_page_top_split">
        <div className="owner_page_top">
          <div className="owner_page_spoon">
            <img
              src={images.spoon}
              className="spoon__img"
              style={{ marginTop: 15, transform: "rotate(300deg)" }}
            />
            <h1>Your Restaurants</h1>
            <img
              src={images.spoon}
              className="spoon__img"
              style={{ marginTop: 15, transform: "rotate(240deg)" }}
            />

          </div>
        </div>

        <div className="owner_page_add">
          <IoMdAddCircle className="owner_page_add_circle" onClick={() => setOwnerView("OwnerNew")} />
          <p className="owner_page_add_new p__opensans">Add new restaurant</p>
        </div>
      </div>

      <div className="owner_page_restaurant">
        {ownerView === "OwnerRestaurant" && (
          <OwnerRestaurant setOwnerView={setOwnerView} id={id} />
        )}
        {ownerView === "OwnerRestaurantInfo" && (
          <OwnerRestaurantInfo setOwnerView={setOwnerView} id={id} />
        )}
        {ownerView === "OwnerTable" && (
          <OwnerTable setOwnerView={setOwnerView} id={id} />
        )}
        {ownerView === "OwnerReservation" && (
          <OwnerReservation setOwnerView={setOwnerView} id={id} />
        )}
        {ownerView === "OwnerNew" && (
          <OwnerNew setOwnerView={setOwnerView} id={id} />
        )}
        {ownerView === "OwnerEdit" && (
          <OwnerEdit setOwnerView={setOwnerView} id={id} />
        )}
      </div>

      <div className="owner_bottom_links">
        <button
          className="custom__button"
          onClick={() => setOwnerView("OwnerReservation")}
        >
          See listed tables
        </button>
        <button
          className="custom__button"
          onClick={() => setOwnerView("OwnerRestaurant")}
        >
          My restaurants
        </button>
      </div>
    </div>
  );
};

export default Owner;
