import React, { useState } from "react";
import axios from "axios";
import "./OwnerEdit.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function OwnerEdit(props) {
  const ownerId = Number(props.id);

  const [restaurantInfo, setRestaurantInfo] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const id = props.id;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/restaurants`)
      .then((res) => {
        setRestaurantInfo(res.data.restaurants);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  if (restaurantInfo.length === 0) {
    return null;
  }

  const restaurant = restaurantInfo.find((i) => i.owner_id === ownerId);

  function handleSubmit() {
    const newRestaurant = { id, title, description, address, image };
    console.log("newRest:", newRestaurant);
    axios
      .put(`http://localhost:8000/restaurants/${restaurant.id}/edit`, newRestaurant)
      .then((res) => props.setOwnerView("OwnerRestaurantInfo"))
      .catch((e) => console.error(`Error: ${e}`));
  }

  return (
    <div className="owner_restaurant_info_outer">
      <div className="owner_restaurant_info">
        <div className="owner_new_container">
          <div className="owner_new_info">
            <h2>Edit your restaurant info:</h2>
          </div>
          <div className="owner_new_input">
            <form>
              <h3>Name</h3>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={restaurant.title}
              />
              <h3>Description</h3>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className={restaurant.description}
              />
              <h3>Address</h3>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={restaurant.address}
              />
              <h3>Image</h3>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder={restaurant.img}
              />
            </form>
          </div>
        </div>
        <div>
          <img className="owner_restaurant_info_image" src={restaurant.img} />
        </div>
      </div>
      <button className="custom__button" onClick={handleSubmit}>
        Save restaurant !
      </button>
    </div>
  );
}

export default OwnerEdit;
