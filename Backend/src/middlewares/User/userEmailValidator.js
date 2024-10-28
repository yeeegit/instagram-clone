const { param } = require('express-validator')

const userEmailValidator = [
  param('value')
    .isEmail().withMessage("Please enter a valid email address.")
    .normalizeEmail()
]

module.exports=userEmailValidator