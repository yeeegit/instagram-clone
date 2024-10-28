const express = require('express')
const routes = express.Router()

const authRoutes = require('./Auth/authRoutes')
const userRoutes = require('./User/userRoutes')
const postRoutes = require('./Post/postRoutes')

routes.use('/auth', authRoutes)
routes.use('/user', userRoutes)
routes.use('/post', postRoutes)

module.exports = routes