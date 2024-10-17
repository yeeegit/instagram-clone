const { SuccesResponse, ErrorResponse } = require('../../helpers/responseHandler')
const registerUserService = require('../../services/Auth/registerUser')
const registerUser = async (req, res) => {
  try {
    const { phoneNumber, fullname, username, email, password, dateOfBirth, role } = req.body
    const newUser = await registerUserService(phoneNumber, fullname, username, email, password, dateOfBirth, role)
    return res.status(200).send(new SuccesResponse("User registered succesfully", newUser))
  } catch (error) {
    return res.status(500).send(new ErrorResponse(error.message))
  }
}
module.exports=registerUser