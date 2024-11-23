const express = require('express')
const routes = express.Router()

const authRoutes = require('./Auth/authRoutes')
const userRoutes = require('./User/userRoutes')
const postRoutes = require('./Post/postRoutes')
const savePostRoutes = require('./SavePost/savePostRoutes')
const followRoutes = require('./Follow/followRoutes')
const postLikeRoutes = require('./PostLike/postLikeRoutes')
const authMiddleware = require('../middlewares/authMiddleware')

routes.use('/auth', authRoutes)
routes.use('/user', authMiddleware, userRoutes)
routes.use('/post', authMiddleware, postRoutes)
routes.use('/post', authMiddleware, savePostRoutes)
routes.use('/follow', followRoutes)
routes.use('/post', postLikeRoutes)

module.exports = routes