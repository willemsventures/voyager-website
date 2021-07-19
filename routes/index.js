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

router.get("/rentals-and-activities-summer", function (req, res, next) {
  res.render("rentals-and-activities-summer", {
    title: "Rentals and Activities - Summer - Voyager Park",
    routename: "rentals-and-activities-summer",
    csrfToken: req.csrfToken()
  });
});

router.get("/rentals-and-activities-winter", function (req, res, next) {
  res.render("rentals-and-activities-winter", {
    title: "Rentals and Activities - Winter - Voyager Park",
    routename: "rentals-and-activities-winter",
    csrfToken: req.csrfToken()
  });
});

router.get("/partner-activities", function (req, res, next) {
  res.render("partner-activities", {
    title: "Partner Activities - Voyager Park",
    routename: "partner-activities",
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

router.get("/faq", function (req, res, next) {
  res.render("faq", {
    title: "FAQ - Voyager Park",
    routename: "faq",
    csrfToken: req.csrfToken()
  });
});

router.get("/aboutus", function (req, res, next) {
  res.render("aboutus", {
    title: "About Us - Voyager Park",
    routename: "aboutus",
    csrfToken: req.csrfToken()
  });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", {
    title: "Contact - Voyager Park",
    routename: "contact",
    csrfToken: req.csrfToken()
  });
});

router.get("/familyigloo", function (req, res, next) {
  res.render("familyigloo", {
    title: "Family Igloo - Voyager Park",
    routename: "familyigloo",
    csrfToken: req.csrfToken()
  });
});

router.get("/floatingigloo", function (req, res, next) {
  res.render("floatingigloo", {
    title: "Floating Igloo - Voyager Park",
    routename: "floatingigloo",
    csrfToken: req.csrfToken()
  });
});

router.get("/rooftoptent", function (req, res, next) {
  res.render("rooftoptent", {
    title: "Rooftop Tent - Voyager Park",
    routename: "rooftoptent",
    csrfToken: req.csrfToken()
  });
});


router.get("/tipitent", function (req, res, next) {
  res.render("tipitent", {
    title: "Tipi Tent - Voyager Park",
    routename: "tipitent",
    csrfToken: req.csrfToken()
  });
});



module.exports = router;
