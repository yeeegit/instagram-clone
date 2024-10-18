const { validationResult } = require('express-validator')
const { SuccesResponse, ErrorResponse } = require('../../helpers/responseHandler')
const registerUserService = require('../../services/Auth/registerUser')
const expressValidatorHelper = require('../../helpers/expressValidatorHelper')
const registerUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const resultOfResponsableErrors = expressValidatorHelper(errors)
    return res.status(400).send(new ErrorResponse(resultOfResponsableErrors))
  }
  try {
    const { fullname, username, email, password, dateOfBirth, role } = req.body
    const newUser = await registerUserService(fullname, username, email, password, dateOfBirth, role)
    return res.status(200).send(new SuccesResponse("User registered succesfully", newUser))
  } catch (error) {
    return res.status(500).send(new ErrorResponse(error.message))
  }
}
module.exports = registerUser