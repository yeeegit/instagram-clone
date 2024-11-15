const { ErrorResponse } = require("../../helpers/responseHandler")
const User = require("../../models/User")
const responseMessages = require('../../helpers/responseMessages')
const Follow = require("../../models/Follow")

const followUser = async (followingId, followerId) => {
  try {
    const follower = await User.findByPk(followerId)
    const following = await User.findByPk(followingId)

    if (!follower || !following) {
      throw new ErrorResponse(responseMessages.USER_NOT_FOUND, 404)
    }

    const existingFollow = await Follow.findOne({ where: { followerId, followingId } })
    if (existingFollow) {
      throw new ErrorResponse(responseMessages.USER_ALREADY_FOLLOW, 409)
    }

    await follower.addFollowing(following)
    return { follower: follower.username, following: following.username }
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const getFollowers = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: [{ model: User, as: 'followers' }]
    })
    if (!user) {
      throw new ErrorResponse(responseMessages.USER_NOT_FOUND, 404)
    }
    const userWithoutPasswordList = user.followers.map(followerUser => {
      const { password: _, ...userWithoutPassword } = followerUser.toJSON()
      return userWithoutPassword;
    })
    return userWithoutPasswordList;
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const getFollowing = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: [{ model: User, as: 'following' }]
    })
    if (!user) {
      throw new ErrorResponse(responseMessages.USER_NOT_FOUND, 404)
    }
    const userWithoutPasswordList = user.following.map(followingUser => {
      const { password: _, ...userWithoutPassword } = followingUser.toJSON()
      return userWithoutPassword;
    })
    return userWithoutPasswordList
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}

module.exports = { followUser, getFollowers, getFollowing }