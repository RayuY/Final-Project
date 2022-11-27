const express = require('express');
const router = express.Router();
const customers = require('../db/queries/customers');


/* GET customers listing. */
router.get('/', (req, res) => {
  customers.getAllCustomers().then(data => {
    console.log(data);
    res.json({ customers: data });
  });
});

module.exports = router;