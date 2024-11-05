const {
  SuccessResponse,
  ErrorResponse,
} = require("../../helpers/responseHandler");
const postServices = require("../../services/Post/post-services");
const responseMessages = require("../../helpers/responseMessages");

const createPost = async (req, res) => {
  const file = req.file;
  const userId = req.user.id;
  const { caption, isCommentsAllowed, likeCount } = req.body;
  try {
    const newPost = await postServices.createPost(
      caption,
      isCommentsAllowed,
      likeCount,
      userId,
      file
    );
    return res
      .status(201)
      .send(
        new SuccessResponse(responseMessages.POST_CREATED_SUCCESSFULLY, newPost)
      );
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message));
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user;
  const { caption, isCommentsAllowed, likeCount } = req.body;
  try {
    const updatedPost = await postServices.updatePost(
      id,
      caption,
      isCommentsAllowed,
      likeCount,
      userId
    );
    return res
      .status(200)
      .send(
        new SuccessResponse(
          responseMessages.POST_UPDATED_SUCCESSFULLY,
          updatedPost
        )
      );
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message));
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await postServices.deletePost(id);
    return res
      .status(200)
      .send(
        new SuccessResponse(
          responseMessages.POST_DELETED_SUCCESSFULLY,
          deletedPost
        )
      );
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message));
  }
};

module.exports = { createPost, updatePost, deletePost };