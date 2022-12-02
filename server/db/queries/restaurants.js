
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

const addTableListing = (spot2, spot4, spot6, ownerId) => {
  const id = Number(ownerId);
  return db.query(`UPDATE restaurants SET spot2 = $1, spot4 = $2, spot6 = $3 WHERE id = $4`, [spot2, spot4, spot6, id])
}

module.exports = { getAllRestaurants, getRestaurantById, addNewRestaurant, addTableListing };
