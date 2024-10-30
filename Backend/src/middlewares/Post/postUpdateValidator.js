const { body,param } = require('express-validator')


const postUpdateValidator = [
  param('id')
  .isInt({min:1}).withMessage("id must be a positive number"),

  body("caption")
  .optional()
  .isString()
  .withMessage("The caption must be text.")
  .isLength({ max: 1000 })
  .withMessage("The caption can be a maximum of 1000 characters."),
body("isCommentsAllowed")
  .optional()
  .isBoolean()
  .withMessage("The 'Comments Allowed' status must be true or false."),
body("likeCount")
  .optional()
  .isInt({ min: 0 })
  .withMessage("The like count must be a positive integer."),

body("userId")
  .isInt({ min: 1 })
  .withMessage("A valid user ID is required to create a post."),
]



module.exports=postUpdateValidator