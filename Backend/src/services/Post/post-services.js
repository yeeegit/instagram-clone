const { ErrorResponse } = require("../../helpers/responseHandler")
const User = require("../../models/User")
const responseMessages = require('../../helpers/responseMessages')
const Post = require("../../models/Post")

const createPost = async (caption, isCommentsAllowed, likeCount, userId) => {
  try {
    const isUserExists = await User.findByPk(userId)
    if (!isUserExists) {
      throw new ErrorResponse(responseMessages.USER_NOT_FOUND, 404)
    }
    const newPost = Post.create({
      caption,
      isCommentsAllowed,
      likeCount,
      userId
    })
    return newPost
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const updatePost = async (id, newCaption, newIsCommentsAllowed, newLikeCount, userId) => {
  try {
    const isUserExists = await User.findByPk(userId)
    if (!isUserExists) {
      throw new ErrorResponse(responseMessages.USER_NOT_FOUND, 404)
    }
    const updateablePost = await Post.findByPk(id)
    if (!updateablePost) {
      throw new ErrorResponse(responseMessages.POST_NOT_FOUND, 404)
    }
    const updatedData = {
      caption: newCaption,
      isCommentsAllowed: newIsCommentsAllowed,
      likeCount: newLikeCount,
      userId
    }
    const updatedPost = await Post.update(updatedData, { where: { id }, returning: true })
    return updatedPost[1][0]
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}

const deletePost = async (id) => {
  try {
    const deleteablePost = await Post.findByPk(id)
    if (!deleteablePost) {
      throw new ErrorResponse(responseMessages.POST_NOT_FOUND, 404)
    }
    const deletedPost = await Post.destroy({ where: { id } })
    if (deletedPost === 0) {
      throw new ErrorResponse(responseMessages.NO_POST_WAS_DELETED, 400)
    }
    return deleteablePost
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}

module.exports = { createPost, updatePost, deletePost }