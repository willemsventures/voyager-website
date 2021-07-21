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

router.get("/northcape-expedition", function (req, res, next) {
  res.render("northcape-expedition", {
    title: "NorthCape Expedition - Voyager Park",
    routename: "northcape-expedition",
    csrfToken: req.csrfToken()
  });
});

router.get("/lapland-expedition", function (req, res, next) {
  res.render("lapland-expedition", {
    title: "Lapland Expedition - Voyager Park",
    routename: "lapland-expedition",
    csrfToken: req.csrfToken()
  });
});


router.get("/aurora-expedition", function (req, res, next) {
  res.render("aurora-expedition", {
    title: "Aurora Expedition - Voyager Park",
    routename: "aurora-expedition",
    csrfToken: req.csrfToken()
  });
});


router.get("/heimdall-expedition", function (req, res, next) {
  res.render("heimdall-expedition", {
    title: "Heimdall Expedition - Voyager Park",
    routename: "heimdall-expedition",
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

router.get("/expeditions", function (req, res, next) {
  res.render("expeditions", {
    title: "Expeditions - Voyager Park",
    routename: "expeditions",
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

router.get("/landrovertentbox", function (req, res, next) {
  res.render("landrovertentbox", {
    title: "Landrover with Tentbox - Voyager Park",
    routename: "landrovertentbox",
    csrfToken: req.csrfToken()
  });
});

router.get("/jimnytentbox", function (req, res, next) {
  res.render("jimnytentbox", {
    title: "Jimny with Tentbox - Voyager Park",
    routename: "jimnytentbox",
    csrfToken: req.csrfToken()
  });
});

router.get("/wagontentbox", function (req, res, next) {
  res.render("wagontentbox", {
    title: "Explorer Wagon with Tentbox - Voyager Park",
    routename: "wagontentbox",
    csrfToken: req.csrfToken()
  });
});

router.get("/feroza", function (req, res, next) {
  res.render("feroza", {
    title: "Daihatsu Feroza - Voyager Park",
    routename: "feroza",
    csrfToken: req.csrfToken()
  });
});

router.get("/samurai", function (req, res, next) {
  res.render("samurai", {
    title: "Suzuki Samurai - Voyager Park",
    routename: "samurai",
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

router.get("/checkout", function (req, res, next) {
  res.render("checkout", {
    title: "Checkout - Voyager Park",
    routename: "checkout",
    csrfToken: req.csrfToken()
  });
});
router.get("/confirmation", function (req, res, next) {
  res.render("confirmation", {
    title: "Confirmation - Voyager Park",
    routename: "confirmation",
    csrfToken: req.csrfToken()
  });
});
router.get("/privacypolicy", function (req, res, next) {
  res.render("privacypolicy", {
    title: "Privacy Policy - Voyager Park",
    routename: "privacypolicy",
    csrfToken: req.csrfToken()
  });
});
router.get("/booking-conditions", function (req, res, next) {
  res.render("booking-conditions", {
    title: "Booking Conditions - Voyager Park",
    routename: "booking-conditions",
    csrfToken: req.csrfToken()
  });
});
router.get("/your-responsibilities", function (req, res, next) {
  res.render("your-responsibilities", {
    title: "Your Responsibilities - Voyager Park",
    routename: "your-responsibilities",
    csrfToken: req.csrfToken()
  });
});
router.get("/cancellation-policy", function (req, res, next) {
  res.render("cancellation-policy", {
    title: "Cancellation Policy - Voyager Park",
    routename: "cancellation-policy",
    csrfToken: req.csrfToken()
  });
});



module.exports = router;
