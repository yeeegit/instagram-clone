const responseMessages = require('../../helpers/responseMessages')
const { ErrorResponse, SuccessResponse } = require("../../helpers/responseHandler")
const User = require("../../models/User")
const Post = require('../../models/Post')
const SavedPost = require('../../models/SavedPost')

//TODO:Write GET services of SavedPost model

const savePost = async (userId, postId) => {
  try {
    const isUserExists = await User.findByPk(userId);
    if (!isUserExists) {
      throw new ErrorResponse(responseMessages.USER_NOT_FOUND, 404);
    }

    const isPostExists = await Post.findByPk(postId);
    if (!isPostExists) {
      throw new ErrorResponse(responseMessages.POST_NOT_FOUND, 404);
    }

    const existingSavedPost = await SavedPost.findOne({ where: { userId, postId } });
    if (existingSavedPost) {
      return new ErrorResponse(responseMessages.POST_ALREADY_SAVED,  409);
    }

    const savedPost = await SavedPost.create({ userId, postId });
    return new SuccessResponse(responseMessages.POST_SAVED_SUCCESSFULLY, savedPost);

  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500);
  }
};


const unsavePost = async (userId, postId) => {
  try {

    const isUserExists = await User.findByPk(userId);
    if (!isUserExists) {
      throw new ErrorResponse(responseMessages.USER_NOT_FOUND, 404);
    }


    const isPostExists = await Post.findByPk(postId);
    if (!isPostExists) {
      throw new ErrorResponse(responseMessages.POST_NOT_FOUND, 404);
    }

    const existingSavedPost = await SavedPost.findOne({ where: { userId, postId } });
    if (!existingSavedPost) {
      return new ErrorResponse(responseMessages.POST_NOT_SAVED_YET, 409);
    }

    await existingSavedPost.destroy();
    return new SuccessResponse(responseMessages.POST_UNSAVED_SUCCESSFULLY, null);

  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500);
  }
};


module.exports = { savePost, unsavePost }