const express = require("express");
const router = express.Router();
const reservations = require("../db/queries/reservations");

/* POST reservation listing. */
router.post("/", (req, res) => {
  const reservation = req.body;                        // needed?
  const userId = +req.headers.cookie.split("=")[1];    // ^^
  console.log("reqbody: +++++++++++++++++++ ", req.body);
  if (
    !reservation.restaurant_id ||
    !reservation.party_size
  ) {
    return res.send("Please complete entire form");
  }

  reservations.addReservation(reservation, userId).then(() => {
    res.redirect("/");
  });

});

/* GET  reservations listing. */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  reservations.getReservationById(id).then((data) => {
    console.log(data);
    res.json({ reservations: data });
  });
});

router.get("/", (req, res) => {
  reservations.getAllReservations().then((data) => {
    console.log(data);
    res.json({ reservations: data });
  });
});

module.exports = router;
