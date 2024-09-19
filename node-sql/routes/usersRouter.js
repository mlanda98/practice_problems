const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.logUsernames);
router.get("/new", usersController.shownForm);
router.post("/new", usersController.saveUsername);

module.exports = router;