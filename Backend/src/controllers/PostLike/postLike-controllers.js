const postLikeServices = require('../../services/PostLike/postLike-services')
const responseMessages = require('../../helpers/responseMessages')
const { SuccessResponse, ErrorResponse } = require('../../helpers/responseHandler')

const postLike = async (req, res) => {
  const { userId, postId } = req.body
  try {
    const likedPost = await postLikeServices.postLike(userId, postId)
    return res.status(201).send(new SuccessResponse(likedPost.message, likedPost.data))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}

module.exports = { postLike };