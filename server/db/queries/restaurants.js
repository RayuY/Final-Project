
const db = require('../../configs/db.config');

const getAllRestaurants = () => {
  return db.query("SELECT * FROM restaurants;").then(data => {
    return data.rows;
  });
};

const getRestaurantById = id => {
  return db.query("SELECT * FROM restaurants WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

const addNewRestaurant = (reservation, userId) => {
  return db.query(`INSERT INTO restaurants (user_id, restaurant_id, party_size) VALUES($1, $2, $3)`, [userId, reservation.restaurant_id, reservation.party_size])
}

const addTableListing = (spot, userId) => {
  return db.query(`UPDATE restaurants SET spot = $1 WHERE id = $2`, [spot, userId])
}

module.exports = { getAllRestaurants, getRestaurantById, addNewRestaurant, addTableListing };
