const { param } = require("express-validator");

const userUsernameValidator = [
  param("value")
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage("Username must be between 1 and 30 characters."),
]
module.exports=userUsernameValidator