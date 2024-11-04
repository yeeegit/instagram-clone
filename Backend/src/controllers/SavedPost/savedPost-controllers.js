const { SuccessResponse, ErrorResponse } = require('../../helpers/responseHandler');
const savedPostService = require('../../services/SavedPost/savedPost-services');

const savePost = async (req, res) => {
  const { postId } = req.body;
  const userId = req.user.id
  try {
    const savePostServiceResponse = await savedPostService.savePost(userId, postId);
    if (savePostServiceResponse.status === true) {
      return res.status(201).send(new SuccessResponse(savePostServiceResponse.message, savePostServiceResponse.data));
    }
    if (savePostServiceResponse.status !== true) {
      return res.status(savePostServiceResponse.statusCode).send(new ErrorResponse(savePostServiceResponse.message))
    }
  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message));
  }
};

const unsavePost = async (req, res) => {
  const { postId } = req.body;
  const userId = req.user.id

  try {
    const unsavePostServiceResponse = await savedPostService.unsavePost(userId, postId);
    if (unsavePostServiceResponse.status === true) {
      return res.status(200).send(new SuccessResponse(unsavePostServiceResponse.message));
    }
    if (unsavePostServiceResponse.status !== true) {
      return res.status(unsavePostServiceResponse.statusCode).send(new ErrorResponse(unsavePostServiceResponse.message))
    }

  } catch (error) {
    return res.status(error.statusCode || 500).send(new ErrorResponse(error.message));
  }
};

module.exports = { savePost, unsavePost }
