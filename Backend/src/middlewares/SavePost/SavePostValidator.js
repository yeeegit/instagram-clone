const { body } = require('express-validator')

const savePostValidator = [
  body("postId")
    .isInt({ min: 1 }).withMessage('Post id must be a positive number')
]

module.exports = savePostValidator