
const db = require('../../configs/db.config');

const getAllRestaurants = () => {
  return db.query("SELECT * FROM restaurants ORDER BY id;").then(data => {
    return data.rows;
  });
};

const getRestaurantById = id => {
  return db.query("SELECT * FROM restaurants WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

const addNewRestaurant = (ownerId, title, description, address, image) => {
  return db.query(`INSERT INTO restaurants (owner_id, title, address, description, img, spot2, spot4, spot6) VALUES ($1, $2, $3, $4, $5, 0, 0, 0) RETURNING *`, [ownerId, title, description, address, image])
}

const addTableListing = (spot2, spot4, spot6, ownerId) => {
  const id = Number(ownerId);
  return db.query(`UPDATE restaurants SET spot2 = $1, spot4 = $2, spot6 = $3 WHERE id = $4 RETURNING *`, [spot2, spot4, spot6, id])
}

module.exports = { getAllRestaurants, getRestaurantById, addNewRestaurant, addTableListing };
