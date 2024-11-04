const express = require("express");
const router = express.Router();
const postControllers = require("../../controllers/Post/post-controllers");
const postCreateValidator = require("../../middlewares/Post/postCreateValidator");
const validationErrorHandler = require("../../helpers/validationErrorHandler");
const postDeleteValidator = require("../../middlewares/Post/postDeleteValidator");
const postUpdateValidator = require("../../middlewares/Post/postUpdateValidator");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/create",
  upload.single("media"),
  postCreateValidator,
  validationErrorHandler,
  postControllers.createPost
);
router.put(
  "/update/:id",
  postUpdateValidator,
  validationErrorHandler,
  postControllers.updatePost
);
router.delete(
  "/delete/:id",
  postDeleteValidator,
  validationErrorHandler,
  postControllers.deletePost
);

module.exports = router;
