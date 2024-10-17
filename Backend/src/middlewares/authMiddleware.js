const jwt = require('jsonwebtoken')
const { ErrorResponse } = require('../helpers/responseHandler')

const authMiddleware = (req, res, next) => {
  const authenticationHeader = req.headers.authorization
  const token = authenticationHeader && authenticationHeader.split(' ')[1]
  if (!token) {
    return res.status(401).send(new ErrorResponse('Token not provided'))
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      res.status(403).send(new ErrorResponse('Invalid or expired token'))
    }
    else {
      req.user = user
      next()
    }
  })
}
module.exports = authMiddleware