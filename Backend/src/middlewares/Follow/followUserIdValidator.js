const { param } = require('express-validator')

const followUserIdValidator = [
  param('userId')
    .isInt({ min: 1 }).withMessage('user id must be a positive number')
]

module.exports = followUserIdValidator;