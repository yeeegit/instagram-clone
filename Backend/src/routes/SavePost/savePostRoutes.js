const express = require('express')
const router = express.Router()
const savedPostController = require('../../controllers/SavedPost/savedPost-controllers')


router.post('/savepost', savedPostController.savePost)
router.delete('/unsavepost', savedPostController.unsavePost)

module.exports = router


