import React, { useContext } from "react";
import { IdContext } from "../../IdContext";

import "./OwnerRestaurant.css"

function OwnerRestaurant() {

  const test = useContext(IdContext)
  
  return (
    <div className="owner_restaurant">
      <img className="owner_restaurant_image" src="https://franchise.dennys.ca/wp-content/uploads/2021/10/banner-mob-1.jpg" />

      <button className="custom__button">List table!</button>
    </div>
  );
}

export default OwnerRestaurant;
