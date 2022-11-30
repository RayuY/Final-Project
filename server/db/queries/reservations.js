

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

const addReservation = (reservation, userId) => {
  return db.query(`INSERT INTO reservations (user_id, restaurant_id, party_size) VALUES($1, $2, $3)`, [userId, reservation.restaurant_id, reservation.party_size])
}



module.exports = { getAllReservations, getReservationById, addReservation };

