import React, { useState } from "react";
import axios from "axios";
import './OwnerNew.css'
import { images } from '../../constants';


function OwnerNew(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const id = props.id

  function handleSubmit() {
    const newRestaurant = { id, title, description, address, phone, image }
    axios
      .post(`http://localhost:8000/restaurants`, newRestaurant)
      .then((res) => props.setOwnerView("OwnerRestaurant"))
      .catch((e) => console.error(`Error: ${e}`));
  }


  return (
    <div className="owner_restaurant_info_outer">
      <div className="owner_restaurant_info">
        <div className="owner_new_container">
          <div className="owner_new_info p__opensans">
            <h2>Enter your new restaurant info:</h2>
          </div>
          <div className="owner_new_input p__opensans">
            <form>

              <h3>Name</h3>
              <input className="input__new_restaruant" type="table_value_2" value={title} onChange={(e) => setTitle(e.target.value)} required />

              <h3>Description</h3>
              <input className="input__new_restaruant" type="table_value_2" value={description} onChange={(e) => setDescription(e.target.value)} required />

              <h3>Address</h3>
              <input className="input__new_restaruant" type="table_value_2" value={address} onChange={(e) => setAddress(e.target.value)} required/>

              <h3>Phone</h3>
              <input className="input__new_restaruant" type="table_value_2" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
              
              <h3>Image</h3>
              <input className="input__new_restaruant" type="table_value_6" value={image} onChange={(e) => setImage(e.target.value)}  required />


            </form>
          </div>
        </div>
        <div>
          {!image? 
          <img className="owner_restaurant_info_image" src={images.tablebae} alt ='rest-info-img' />
          : 
          <img className="owner_restaurant_info_image" src={image} alt ='rest-info-img' />}
        </div>
      </div>
      <button
        className="custom__button"
        onClick={(handleSubmit)}
      >
        Add restaurant !
      </button>
    </div>
  );
}

export default OwnerNew;
