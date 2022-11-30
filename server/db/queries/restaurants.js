
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

module.exports = { getAllRestaurants, getRestaurantById };
