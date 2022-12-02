
const express = require('express');
const router = express.Router();
const restaurants = require('../db/queries/restaurants');

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const spot2 = body.spot2;
  const spot4 = body.spot4;
  const spot6 = body.spot6;
  restaurants.addTableListing(spot2, spot4, spot6, id).then((data) => {
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
