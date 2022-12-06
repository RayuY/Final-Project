

const db = require('../../configs/db.config');

const getAllReservations = () => {
  return db.query("SELECT * FROM reservations ORDER BY id;").then(data => {
    return data.rows;
  });
};

const getReservationById = id => {
  return db.query("SELECT * FROM reservations WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

const addReservation = (userId, restaurantId, partySize) => {
  return db.query(`INSERT INTO reservations (user_id, restaurant_id, party_size) VALUES($1, $2, $3) RETURNING *`, [userId, restaurantId, partySize]);
};

const deleteReservation = id => {
  return db.query("DELETE FROM reservations WHERE id = $1", [id]);
};

module.exports = { getAllReservations, getReservationById, addReservation, deleteReservation };

