const { param } = require('express-validator')


const postDeleteValidator = [
  param('id')
  .isInt({min:1}).withMessage("id must be a positive number"),
]



module.exports=postDeleteValidator