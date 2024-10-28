const {param}=require('express-validator')

const userIdValidator= [
param('value')
.isInt({min:1}).withMessage("id must be a positive number")
]

module.exports=userIdValidator