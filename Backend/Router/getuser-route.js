const express = require("express");
const {getAllUser, deleteUser, findUserById, upadateUserById} = require("../controllers/getuser-controller");
const authmiddleware = require("../middlewares/auth-middleware");
const adminmiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.get("/users", authmiddleware, adminmiddleware, getAllUser);
router.get("/users/:id", authmiddleware, adminmiddleware, findUserById);
router.delete("/users/delete/:id", authmiddleware, adminmiddleware, deleteUser);
router.patch("/users/update/:id", authmiddleware, adminmiddleware, upadateUserById);

module.exports = router;