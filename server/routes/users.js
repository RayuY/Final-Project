const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');


/* GET customers listing. */
router.get('/', (req, res) => {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({ users: data });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log("test test", id);
  users.getUserById(id).then(data => {
    console.log(data);
    res.json({ users: data });
  });
});

module.exports = router;