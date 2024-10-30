const express = require('express')
const routes = express.Router()

const authRoutes = require('./Auth/authRoutes')
const userRoutes = require('./User/userRoutes')
const postRoutes = require('./Post/postRoutes')
const savePostRoutes = require('./SavePost/savePostRoutes')

routes.use('/auth', authRoutes)
routes.use('/user', userRoutes)
routes.use('/post', postRoutes)
routes.use('/post', savePostRoutes)

module.exports = routes