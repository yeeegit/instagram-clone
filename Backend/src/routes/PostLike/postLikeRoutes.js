const express = require('express');
const router = express.Router();
const postLikeControllers = require('../../controllers/PostLike/postLike-controllers');

router.post('/likepost', postLikeControllers.postLike);

module.exports = router;