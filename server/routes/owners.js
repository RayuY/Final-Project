const express = require('express');
const router = express.Router();
const owners = require('../db/queries/owners');


/* GET  owner by Id. */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  owners.getOwnerById(id).then(data => {
    res.json({ owners: data });
  });
});

/* GET  owners listing. */
router.get('/', (req, res) => {
  owners.getAllOwners().then(data => {
    res.json({ owners: data });
  });
});



module.exports = router;