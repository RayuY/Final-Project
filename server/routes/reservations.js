const express = require("express");
const router = express.Router();
const reservations = require("../db/queries/reservations");


/* DELETE reservation. */
router.delete("/:id/delete", (req, res) => {
  const id = req.params.id;
  reservations.deleteReservation(id).then((data) => {
    return res.send("OK");
  });
});


/* POST reservation listing. */
router.post("/", (req, res) => {
  const body = req.body;
  const userId = body.userId;
  const partySize = body.partySize;
  const restaurantId = body.restaurantId;
  reservations.addReservation(userId, restaurantId, partySize).then((data) => {
    return res.json(data.rows[0]);
  });
});


/* GET  reservations listing. */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  reservations.getReservationById(id).then((data) => {
    res.json({ reservations: data });
  });
});

router.get("/", (req, res) => {
  reservations.getAllReservations().then((data) => {
    res.json({ reservations: data });
  });
});

module.exports = router;
