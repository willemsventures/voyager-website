var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home - Voyager Park",
    routename: "home",
    csrfToken: req.csrfToken()
  });
});

router.get("/accommodation", function (req, res, next) {
  res.render("accommodation", {
    title: "Accommodation - Voyager Park",
    routename: "accommodation",
    csrfToken: req.csrfToken()
  });
});

router.get("/rentals-and-activities", function (req, res, next) {
  res.render("rentals-and-activities", {
    title: "Rentals and Activities - Voyager Park",
    routename: "rentals-and-activities",
    csrfToken: req.csrfToken()
  });
});

router.get("/deluxeigloo", function (req, res, next) {
  res.render("deluxeigloo", {
    title: "Deluxe Glass - Voyager Park",
    routename: "deluxeigloo",
    csrfToken: req.csrfToken()
  });
});



module.exports = router;
