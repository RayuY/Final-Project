const express = require('express');
const router = express.Router();
const customers = require('../db/queries/customers');


/* GET  customers listing. */
router.get('/', (req, res) => {
  customers.getAllOwners().then(data => {
    console.log(data);
    res.json({ owners: data });
  });
});



module.exports = router;