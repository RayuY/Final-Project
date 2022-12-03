import React, { useState } from "react";
import axios from "axios";
import './OwnerNew.css'


function OwnerNew(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const id = props.id
  
  // const handleSubmit = async() => {
  //   const newRestaurant = { title, description, address, image }
  //   console.log("newRest:", newRestaurant)

  //   try {
  //     const response = await axios({

  //       .post(`http://localhost:8000/restaurants`, newRestaurant)
  //       .then((res) => props.setOwnerView("OwnerRestaurant"))
  //     })
  //   }
  //     .catch(e) {
  //       console.error(`Error: ${e}`)
  //     } 
  // }

  function handleSubmit() {
    const newRestaurant = { id, title, description, address, image }
    console.log("newRest:", newRestaurant)
    axios
      .post(`http://localhost:8000/restaurants`, newRestaurant)
      .then((res) => props.setOwnerView("OwnerRestaurant"))
      .catch((e) => console.error(`Error: ${e}`));
  }


  return (
    <div className="owner_restaurant_info_outer">
      <div className="owner_restaurant_info">
        <div className="owner_new_container">
          <div className="owner_new_info">
            <h2>Please enter your new restaurant info:</h2>
          </div>
          <div className="owner_new_input">
            <form>
            <h3>Name</h3>
            <input type="table_value_2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Restaurant Name" />
            <h3>Description</h3>
            <input type="table_value_2" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="owner_new_description" />
            <h3>Address</h3>
            <input type="table_value_2" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <h3>Image</h3>
                <input type="table_value_6" value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL" />
              </form>
          </div>
        </div>
        <div>
          {/* {!image ? : <img className="owner_restaurant_info_image" src={image} />} */}
          <img className="owner_restaurant_info_image" src={image}/>
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
