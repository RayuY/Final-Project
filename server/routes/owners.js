const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');


/* GET  owners listing. */
router.get('/', (req, res) => {
  users.getAllOwners().then(data => {
    console.log(data);
    res.json({ owners: data });
  });
});



/* GET  owner by Id. */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log("test test", id);
  users.getOwnerById(id).then(data => {
    console.log(data);
    res.json({ owners: data });
  });
});


module.exports = router;