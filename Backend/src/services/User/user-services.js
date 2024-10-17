const { ErrorResponse } = require("../../helpers/responseHandler")
const User = require("../../models/User")

const getUserByField = async (field) => {
  try {
    const user = await User.findOne({ where:field, attributes: { exclude: 'password' } })
    return user
  } catch (error) {
    throw new ErrorResponse(error.message)
  }
}

const getUserByEmail = async ({email}) => {
  await getUserByField(email)
}
const getUserByUsername = async ({username}) => {
  await getUserByField(username)
}
module.exports = { getUserByEmail, getUserByUsername }