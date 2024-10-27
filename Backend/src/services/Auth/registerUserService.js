const bcrypt = require("bcrypt");
const { getUserByEmail, getUserByUsername } = require("../User/user-services");
const { ErrorResponse } = require("../../helpers/responseHandler");
const responseMessages = require('../../helpers/responseMessages')
const User = require("../../models/User");

const registerUserService = async (fullname, username, email, password, role) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const isEmailExists = await getUserByEmail(email);
    const isUsernameExists = await getUserByUsername(username);

    if (isEmailExists) {
      throw new ErrorResponse(responseMessages.EMAIL_ALREADY_EXISTS, 400);
    }

    if (isUsernameExists) {
      throw new ErrorResponse(responseMessages.USERNAME_ALREADY_EXISTS, 400);
    }


    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullname,
      username,
      role,
    });

    const { password:_, ...userWithoutPassword } = newUser.toJSON();

    return { user: userWithoutPassword }
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500);
  }
};

module.exports = registerUserService;
