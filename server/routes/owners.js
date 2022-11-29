const express = require('express');
const router = express.Router();
const customers = require('../db/queries/customers');


/* GET  owners listing. */
router.get('/', (req, res) => {
  customers.getAllOwners().then(data => {
    console.log(data);
    res.json({ owners: data });
  });
});



/* GET  owner by Id. */
router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log("test test", id);
  customers.getOwnerById(id).then(data => {
    console.log(data);
    res.json({ owners: data });
  });
});


module.exports = router;