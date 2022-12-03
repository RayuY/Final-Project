

const db = require('../../configs/db.config');

const getAllReservations = () => {
  return db.query("SELECT * FROM reservations;").then(data => {
    return data.rows;
  });
};

const getReservationById = id => {
  return db.query("SELECT * FROM reservations WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

const addReservation = (userId, restaurantId, partySize) => {
  return db.query(`INSERT INTO reservations (user_id, restaurant_id, party_size) VALUES($1, $2, $3)`, [userId, restaurantId, partySize])
}



module.exports = { getAllReservations, getReservationById, addReservation };

