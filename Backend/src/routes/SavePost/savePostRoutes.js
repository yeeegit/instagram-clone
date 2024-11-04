const express = require("express");
const router = express.Router();
const savedPostController = require("../../controllers/SavedPost/savedPost-controllers");
const savePostValidator = require("../../middlewares/SavePost/SavePostValidator");
const validationErrorHandler = require("../../helpers/validationErrorHandler");

router.post("/savepost", savePostValidator, validationErrorHandler, savedPostController.savePost);
router.delete("/unsavepost", savePostValidator, validationErrorHandler, savedPostController.unsavePost);

module.exports = router;
