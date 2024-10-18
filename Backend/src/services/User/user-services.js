const { ErrorResponse } = require("../../helpers/responseHandler")
const User = require("../../models/User")

const findUser = async (field) => {
  try {
    const user = await User.findOne({ where: field, attributes: { exclude: 'password' } })
    return user || null
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const getUserByEmail = (email) => findUser({ email })
const getUserByUsername = (username) => findUser({ username })

module.exports = { getUserByEmail, getUserByUsername }