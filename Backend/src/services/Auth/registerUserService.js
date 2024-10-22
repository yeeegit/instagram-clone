const bcrypt = require("bcrypt");
const { getUserByEmail, getUserByUsername } = require("../User/user-services");
const { ErrorResponse } = require("../../helpers/responseHandler");
const User = require("../../models/User");

const registerUserService = async ( fullname,  username,email,password,role = "user"/* Default role */) => { 
  const hashedPassword = await bcrypt.hash(password, 10);

  const isEmailExists = await getUserByEmail(email);
  const isUsernameExists = await getUserByUsername(username);

  if (isEmailExists) {
    throw new ErrorResponse("Email already exists");
  }

  if (isUsernameExists) {
    throw new ErrorResponse("Username already exists");
  }

  try {
    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullname,
      username,
      role,
    });

    const { password, ...userWithoutPassword } = newUser.toJSON();

    return {
      success: true,
      user: userWithoutPassword,
    };
  } catch (error) {
    throw new ErrorResponse(error.message);
  }
};

module.exports = registerUserService;
