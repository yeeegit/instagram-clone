const express = require('express')
const routes = express()
const authRoutes = require('./authRoutes')

routes.use('/auth', authRoutes)


module.exports=routes