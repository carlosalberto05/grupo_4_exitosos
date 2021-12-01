const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users/login", userController.login);

module.exports = router;
