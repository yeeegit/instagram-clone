const express = require("express");
const router = express.Router();
const registerUserController = require("../../controllers/Auth/registerUserController");
const userRegisterValidator = require("../../middlewares/User/userRegistrationValidator");
const userLoginValidator = require("../../middlewares/User/userLoginValidator");
const authMiddleware = require("../../middlewares/authMiddleware");
const validationErrorHandler = require("../../helpers/validationErrorHandler");
const loginUserController = require("../../controllers/Auth/loginUserController");
const getPostsFromUsersFollowing = require("../../controllers/getPostsFromUsersFollowing");

router.post(
  "/register",
  userRegisterValidator,
  validationErrorHandler,
  registerUserController
);
router.post(
  "/login",
  userLoginValidator,
  validationErrorHandler,
  loginUserController
);
router.get('/getMainPagePosts', authMiddleware, getPostsFromUsersFollowing)

module.exports = router;
