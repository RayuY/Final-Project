import React from 'react'

function OwnerRestaurantInfo(props) {

  return (
    <div>
      <h1>Denny's restaurant.name</h1>
      <p>restaurants description</p>
      <div>restaurants address</div>
      <img className="owner_restaurant_image" src="https://franchise.dennys.ca/wp-content/uploads/2021/10/banner-mob-1.jpg" onClick={() => props.setOwnerView("OwnerRestaurantInfo")} />


      <button className="custom__button" onClick={() => props.setOwnerView("OwnerRestaurant")} >Confirm changes</button>
    </div>
  )
}

export default OwnerRestaurantInfo