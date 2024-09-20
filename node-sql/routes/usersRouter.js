const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.getUsernames);
router.get("/new", usersController.createUsernameGet);
router.post("/new", usersController.createUsernamePost);

module.exports = router;