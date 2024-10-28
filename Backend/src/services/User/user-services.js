const { ErrorResponse } = require("../../helpers/responseHandler")
const responseMessages = require('../../helpers/responseMessages')
const User = require("../../models/User")
const bcrypt = require('bcrypt')

const findUserByField = async (field) => {
  try {
    const user = await User.findOne({ where: field, attributes: { exclude: 'password' } })
    return user;
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}
const getUserByEmail = (email) => findUserByField({ email })
const getUserByUsername = (username) => findUserByField({ username })

const updateUser = async (id, newEmail, newPassword, newFullname, newUsername, newDateOfBirth, newUserImage, newBio) => {
  try {
    const updateableUser = await User.findOne({ where: { id } })
    if (!updateableUser) {
      throw new ErrorResponse(responseMessages.USER_NOT_FOUND)
    }
    let isPasswordSame = true
    const { email, password, fullname, username, dateOfBirth, userImage, bio } = updateableUser;// The "role" field should be managed within Admin Services, as users are not permitted to modify their own roles.
    const hashedPassword = (newPassword) ? (await bcrypt.hash(newPassword, 10)) : password
    isPasswordSame = await bcrypt.compare(newPassword, password)

    if (email === newEmail &&
      fullname === newFullname &&
      username === newUsername &&
      dateOfBirth === newDateOfBirth &&
      userImage === newUserImage &&
      bio === newBio &&
      isPasswordSame
    ) {
      throw new ErrorResponse(responseMessages.USER_DATA_UNCHANGED, 404)
    }
    const updatedData = {
      email: newEmail,
      password: hashedPassword,
      fullname: newFullname,
      username: newUsername,
      dateOfBirth: newDateOfBirth,
      userImage: newUserImage,
      bio: newBio,
    }
    const updatedUser = await User.update(updatedData, {
      where: { id },
      returning: true
    })
    const updatedUserTable = updatedUser[1][0]
    const { password: _, ...updatedUserWithoutPassword } = updatedUserTable.toJSON()
    return updatedUserWithoutPassword;
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}



module.exports = { getUserByEmail, getUserByUsername, updateUser, findUserByField }