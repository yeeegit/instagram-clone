const express = require('express')
const router = express.Router()
const postControllers = require('../../controllers/Post/post-controllers')
const postCreateValidator = require('../../middlewares/Post/postCreateValidator')
const validationErrorHandler = require('../../helpers/validationErrorHandler')
const postDeleteValidator = require('../../middlewares/Post/postDeleteValidator')
const postUpdateValidator = require('../../middlewares/Post/postUpdateValidator')

router.post('/create', postCreateValidator, validationErrorHandler, postControllers.createPost)
router.put('/update/:id', postUpdateValidator, validationErrorHandler, postControllers.updatePost)
router.delete('/delete/:id', postDeleteValidator, validationErrorHandler, postControllers.deletePost)

module.exports = router




