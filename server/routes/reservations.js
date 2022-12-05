const express = require("express");
const router = express.Router();
const reservations = require("../db/queries/reservations");

router.delete("/:id/delete", (req, res) => {
  const id = req.params.id;
  console.log(id);
  reservations.deleteReservation(id).then((data) => {
    return res.send("OK");
  });
});







/* POST reservation listing. */
router.post("/", (req, res) => {
  const body = req.body;
  console.log("reqbody: ", req.body);
  const userId = body.userId;
  const partySize = body.partySize;
  const restaurantId = body.restaurantId;
  console.log("testtest: ", userId, partySize, restaurantId);
  reservations.addReservation(userId, restaurantId, partySize).then((data) => {
    return res.send("OK");
  });

});

/* GET  reservations listing. */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  reservations.getReservationById(id).then((data) => {
    // console.log(data);
    res.json({ reservations: data });
  });
});

router.get("/", (req, res) => {
  reservations.getAllReservations().then((data) => {
    // console.log(data);
    res.json({ reservations: data });
  });
});

module.exports = router;
