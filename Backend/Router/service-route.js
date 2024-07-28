const express = require("express");
const servicesData = require("../controllers/services-controller");
const router = express.Router();

router.get("/services", servicesData);

module.exports = router;