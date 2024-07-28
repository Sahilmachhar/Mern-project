const express = require("express"); 
const { home, register, login, user } = require("../controllers/auth-controller");
const router = express.Router();
const validatemiddleware = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");
const loginSchema = require("../validators/login-validator");
const authmiddleware = require("../middlewares/auth-middleware");

router.get("/", home);
router.post("/register", validatemiddleware(signupSchema), register);
router.post("/login", validatemiddleware(loginSchema), login);
router.get("/user", authmiddleware, user);

module.exports = router;