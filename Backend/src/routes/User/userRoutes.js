const express = require('express')
const router = express.Router()
const userControllers = require('../../controllers/User/user-controllers')
const userUpdateValidator = require('../../middlewares/User/userUpdateValidator')
const validationErrorHandler = require('../../helpers/validationErrorHandler')

router.put('/update/:id', userUpdateValidator, validationErrorHandler, userControllers.updateUser)

module.exports = router