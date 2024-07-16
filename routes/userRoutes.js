const express = require('express');
const bookingController = require("../controllers/controller");

const router = express.Router();

router.post("/booking", bookingController.createBooking);
router.get("/booking", bookingController.getBooking);
router.get("/booking", bookingController.getBookingInfo);
router.get("/booking/:id", bookingController.getBookingById);
router.put("/booking/:id", bookingController.upDateBookingById);
router.delete("/booking/:id", bookingController.deleteBookingById);

module.exports = router;



// http:localhost:3000/api/users