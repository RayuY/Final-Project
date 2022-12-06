
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

const addNewRestaurant = (ownerId, title, description, address, phone, image) => {
  return db.query(`INSERT INTO restaurants (owner_id, title, address, description, phone, img, review, avg_price, spot2, spot4, spot6) VALUES ($1, $2, $3, $4, $5, $6, 0, 20, 0, 0, 0) RETURNING *`, [ownerId, title, description, address, phone, image])
}

const addTableListing = (spot2, spot4, spot6, ownerId) => {
  const id = Number(ownerId);
  return db.query(`UPDATE restaurants SET spot2 = $1, spot4 = $2, spot6 = $3 WHERE id = $4 RETURNING *`, [spot2, spot4, spot6, id])
}

const editRestaurant = (ownerId, title, description, address, phone, image) => {
  return db.query(`UPDATE restaurants SET title = $2, description = $3, address = $4, phone = $5, img = $6 WHERE id = $1 RETURNING *`, [ownerId, title, description, address, phone, image])
}


module.exports = { getAllRestaurants, getRestaurantById, addNewRestaurant, addTableListing, editRestaurant };
