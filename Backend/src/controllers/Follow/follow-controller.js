const { SuccessResponse, ErrorResponse } = require('../../helpers/responseHandler');
const followServices = require('../../services/Follow/follow-services')
const responseMessages = require('../../helpers/responseMessages')

const followUser = async (req, res) => {
  const { followerId, followingId } = req.body;
  try {
    const result = await followServices.followUser(followingId, followerId)
    return res.status(201).send(new SuccessResponse(`${result.follower} is now following ${result.following}`))
  } catch (error) {
    res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}

const getFollowers = async (req, res) => {
  const { userId } = req.params;
  try {
    const followers = await followServices.getFollowers(userId)
    return res.status(200).send(new SuccessResponse(responseMessages.FOLLOWERS_RETRIEVED_SUCCESSFULLY, followers))
  } catch (error) {
    res.status(error.statusCode).send(new ErrorResponse(error.message))
  }

}
const getFollowing = async (req, res) => {
  const { userId } = req.params;
  try {
    const following = await followServices.getFollowing(userId)
    return res.status(200).send(new SuccessResponse(responseMessages.FOLLOWING_LIST_RETRIEVED_SUCCESSFULLY, following))
  } catch (error) {
    res.status(error.statusCode).send(new ErrorResponse(error.message))
  }

}


module.exports = { followUser, getFollowers, getFollowing }