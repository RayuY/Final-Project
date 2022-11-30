import React, { useContext } from "react";
import { IdContext } from "../../IdContext";

import "./OwnerRestaurant.css"

function OwnerRestaurant(props) {

  const test = useContext(IdContext)
  
  return (
    <div className="owner_restaurant">
      <img className="owner_restaurant_image" src="https://franchise.dennys.ca/wp-content/uploads/2021/10/banner-mob-1.jpg" onClick={() => props.setOwnerView("OwnerRestaurantInfo")} />

      <button className="custom__button" onClick={() => props.setOwnerView("OwnerTable")} >List table!</button>
    </div>
  );
}

export default OwnerRestaurant;
