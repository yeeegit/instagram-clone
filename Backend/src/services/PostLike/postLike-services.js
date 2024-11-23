const redisClient = require('../../../config/redisClient')
const { ErrorResponse, SuccessResponse } = require('../../helpers/responseHandler')
const User = require('../../models/User')
const responseMessages = require('../../helpers/responseMessages')
const Post = require('../../models/Post')


const postLike = async (userId, postId) => {
  try {
    const isUserExists = await User.findByPk(userId)
    if (!isUserExists) {
      throw new ErrorResponse(responseMessages.USER_NOT_FOUND, 404)
    }
    const isPostExists = await Post.findByPk(postId)
    if (!isPostExists) {
      throw new ErrorResponse(responseMessages.POST_NOT_FOUND, 404)
    }

    const isAdded = await redisClient.sadd(`post:likes:${postId}`, userId)
    if (isAdded === 1) {
      const newLikeCount = await redisClient.incr(`post:likeCount:${postId}`)
      return new SuccessResponse(responseMessages.POST_LIKED_SUCESSFULLY, newLikeCount);
    }
    else {
      await redisClient.srem(`post:likes:${postId}`, userId)
      const newLikeCount = await redisClient.decr(`post:likeCount:${postId}`)
      return new SuccessResponse(responseMessages.POST_UNLIKED_SUCCESSFULLY, newLikeCount);
    }

  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}



module.exports = { postLike }