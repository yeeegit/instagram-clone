const { ErrorResponse, SuccessResponse } = require('../../helpers/responseHandler')
const userServices = require('../../services/User/user-services')
const responseMessages = require('../../helpers/responseMessages')

const findUserByField = async (req, res) => {
  const field = req.path.split('/')[2]
  const { value } = req.params;
  try {
    const user = await userServices.findUserByField({ [field]: value })
    if (!user) {
      return res.status(404).send(new ErrorResponse(responseMessages.USER_NOT_FOUND))
    }
    return res.status(200).send(new SuccessResponse(responseMessages.USER_SUCCESSFULLY_FOUNDED, user))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}


const updateUser = async (req, res) => {
  const { id } = req.user.id
  const { email, password, fullname, username, dateOfBirth, userImage, bio, role } = req.body
  try {
    const updatedUser = await userServices.updateUser(id, email, password, fullname, username, dateOfBirth, userImage, bio, role)
    return res.status(200).send(new SuccessResponse(responseMessages.USER_UPDATED, updatedUser))
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message))
  }
}
module.exports = { updateUser, findUserByField }