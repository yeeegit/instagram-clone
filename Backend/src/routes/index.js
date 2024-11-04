const express = require('express')
const routes = express.Router()

const authRoutes = require('./Auth/authRoutes')
const userRoutes = require('./User/userRoutes')
const postRoutes = require('./Post/postRoutes')
const savePostRoutes = require('./SavePost/savePostRoutes')
const authMiddleware = require('../middlewares/authMiddleware')

routes.use('/auth', authRoutes)
routes.use('/user', authMiddleware, userRoutes)
routes.use('/post', authMiddleware, postRoutes)
routes.use('/post', authMiddleware, savePostRoutes)

module.exports = routes