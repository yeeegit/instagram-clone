const { body } = require('express-validator')

const followUserValidator = [
  body('followingId')
    .isInt({ min: 1 }).withMessage("following id must be a positive number"),
  body('followerId')
    .isInt({ min: 1 }).withMessage("follower id must be a positive number")
]

module.exports = followUserValidator