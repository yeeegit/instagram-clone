const express= require('express')
const router= express.Router()
const registerUserController= require('../../controllers/Auth/registerUser')

router.post('/register',registerUserController)

module.exports=router