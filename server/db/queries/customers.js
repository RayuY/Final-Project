// Then we will make a file inside of /queries folder, called users.js. This file will contain EVERY database function for the users table. For the future, we will use this pattern for any other table entities ( make a file, and make functions for a specific table

const db = require('../../configs/db.config');

const getAllCustomers = () => {
  return db.query("SELECT * FROM customers;").then(data => {
    return data.rows;
  });
};

const getCustomerById = id => {
  return db.query("SELECT * FROM customers; WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

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

module.exports = { getAllCustomers, getCustomerById, getAllOwners, getOwnerById };