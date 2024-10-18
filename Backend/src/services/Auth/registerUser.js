const bcrypt = require('bcrypt')
const { getUserByEmail, getUserByUsername } = require('../User/user-services')
const { ErrorResponse } = require('../../helpers/responseHandler')
const User = require('../../models/User')


const registerUser = async ( email, fullname, password, username, dateOfBirth, role) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  const isEmailExists = await getUserByEmail(email)
  const isUsernameExists = await getUserByUsername(username)
  if (isEmailExists) {
    throw new ErrorResponse('Email already exists')
  }
  if (isUsernameExists) {
    throw new ErrorResponse('Username already exists')
  }
  try {
    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullname,
      username,
      dateOfBirth,
      role
    })
    const { password, ...userWithoutPassword } = newUser.toJSON()
    return userWithoutPassword
  } catch (error) {
    throw new ErrorResponse(error.message)
  }
}
module.exports = registerUser