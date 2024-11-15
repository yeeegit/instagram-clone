const express = require("express");
const router = express.Router();
const followControllers = require('../../controllers/Follow/follow-controller');
const followUserIdValidator = require("../../middlewares/Follow/followUserIdValidator");
const validationErrorHandler = require("../../helpers/validationErrorHandler");
const followUserValidator = require("../../middlewares/Follow/followUservalidator");


router.get('/getfollowers/:userId', followUserIdValidator, validationErrorHandler, followControllers.getFollowers)
router.get('/getfollowing/:userId', followUserIdValidator, validationErrorHandler, followControllers.getFollowing)
router.post("/followuser", followUserValidator, validationErrorHandler, followControllers.followUser);

module.exports = router;
