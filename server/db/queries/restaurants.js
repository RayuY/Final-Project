
const db = require('../../configs/db.config');

const getAllRestaurants = () => {
  return db.query("SELECT * FROM restaurants;").then(data => {
    return data.rows;
  });
};

module.exports = { getAllRestaurants };
