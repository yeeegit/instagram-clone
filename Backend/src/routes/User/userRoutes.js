const express = require('express')
const router = express.Router()
const userControllers = require('../../controllers/User/user-controllers')
const userUpdateValidator = require('../../middlewares/User/userUpdateValidator')
const validationErrorHandler = require('../../helpers/validationErrorHandler')
const userIdValidator = require('../../middlewares/User/userIdValidator')
const userEmailValidator = require('../../middlewares/User/userEmailValidator')
const userUsernameValidator = require('../../middlewares/User/userUsernameValidator')

router.get('/getuserbyusername/username/:value',userUsernameValidator,validationErrorHandler, userControllers.findUserByField)
router.get('/getuserbyemail/email/:value',userEmailValidator,validationErrorHandler, userControllers.findUserByField)
router.get('/getuserbyid/id/:value',userIdValidator,validationErrorHandler, userControllers.findUserByField)

router.put('/update/:id', userUpdateValidator, validationErrorHandler, userControllers.updateUser)

module.exports = router