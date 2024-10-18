const express= require('express')
const router= express.Router()
const registerUserController= require('../../controllers/Auth/registerUser')
const userRegisterValidator = require('../../middlewares/User/userRegistration')

router.post('/register',userRegisterValidator, registerUserController)

module.exports=router