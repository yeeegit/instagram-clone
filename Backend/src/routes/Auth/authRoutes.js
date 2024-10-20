const express = require("express");
const router = express.Router();
const registerUserController = require("../../controllers/Auth/registerUserController");
const userRegisterValidator = require("../../middlewares/User/userRegistrationValidator");

router.post("/register", userRegisterValidator, registerUserController);

module.exports = router;
