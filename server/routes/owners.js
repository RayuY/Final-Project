const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');


/* GET users listing. */
router.get('/', (req, res) => {
  users.getAllOwners().then(data => {
    console.log(data);
    res.json({owners: data});
  })
});

module.exports = router;