
const db = require('../../configs/db.config');

const getAllOwners = () => {
  return db.query("SELECT * FROM owners;").then(data => {
    return data.rows;
  });
};

const getOwnerById = id => {
  return db.query("SELECT * FROM owners WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

module.exports = { getAllOwners, getOwnerById };
