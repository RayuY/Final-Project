const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');


/* GET customers listing. */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  users.getUserById(id).then(data => {
    res.json({ users: data });
  });
});

router.get('/', (req, res) => {
  users.getAllUsers().then(data => {
    res.json({ users: data });
  });
});

module.exports = router;