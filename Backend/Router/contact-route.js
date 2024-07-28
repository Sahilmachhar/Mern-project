const express = require("express");
const ContactForm = require("../controllers/contact-controller");
const authmiddleware = require("../middlewares/auth-middleware");
const adminmiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.post("/contact", ContactForm.contact);
router.get("/contact-data", authmiddleware, adminmiddleware, ContactForm.getContact);
router.delete("/contact-delete/:id", authmiddleware, adminmiddleware, ContactForm.deleteContact);

module.exports = router;