const { ErrorResponse, SuccessResponse } = require('../../helpers/responseHandler')
const userServices = require('../../services/User/user-services')
const responseMessages = require('../../helpers/responseMessages')

const updateUser = async (req, res) => {
  const { id } = req.params
  const { email, password, fullname, username, dateOfBirth, userImage, bio, role } = req.body
  try {
    const updatedUser = await userServices.updateUser(id, email, password, fullname, username, dateOfBirth, userImage, bio, role)
    return res.status(200).send(new SuccessResponse(responseMessages.USER_UPDATED, updatedUser))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}
module.exports = { updateUser }