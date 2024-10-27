const express= require('express')
const routes= express.Router()
const authRoutes=require('./Auth/authRoutes')
const userRoutes=require('./User/userRoutes')

routes.use('/auth',authRoutes)
routes.use('/user',userRoutes)

module.exports=routes