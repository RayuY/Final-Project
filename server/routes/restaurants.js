
const express = require('express');
const router = express.Router();
const restaurants = require('../db/queries/restaurants');

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const spot = body.spot
  console.log("id:", id);
  console.log("body:", body);
  console.log("spot:", spot);
  restaurants.addTableListing(spot, id).then((data) => {
    console.log("data", data);
    return res.send("OK");
  });
});

/* GET  restaurants listing. */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  restaurants.getRestaurantById(id).then(data => {
    console.log(data);
    res.json({ restaurants: data });
  });
});

router.get('/', (req, res) => {
  restaurants.getAllRestaurants().then(data => {
    console.log(data);
    res.json({ restaurants: data });
  });
});



module.exports = router;
