
const express = require('express');
const router = express.Router();
const restaurants = require('../db/queries/restaurants');


/* GET  restaurants listing. */
router.get('/', (req, res) => {
  restaurants.getAllRestaurants().then(data => {
    console.log(data);
    res.json({ restaurants: data });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  restaurants.getRestaurantById(id).then(data => {
    console.log(data);
    res.json({ restaurants: data });
  });
});

module.exports = router;
