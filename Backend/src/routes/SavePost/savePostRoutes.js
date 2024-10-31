const express = require("express");
const router = express.Router();
const savedPostController = require("../../controllers/SavedPost/savedPost-controllers");
const authMiddleware = require("../../middlewares/authMiddleware");

router.post("/savepost", authMiddleware, savedPostController.savePost);
router.delete("/unsavepost", authMiddleware, savedPostController.unsavePost);

module.exports = router;
