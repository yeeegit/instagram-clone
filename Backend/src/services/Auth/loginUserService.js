const bcrypt = require("bcrypt");
const User = require("../../models/User");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { ErrorResponse, SuccessResponse } = require("../../helpers/responseHandler");

const getUserByEmailOrUsername = async (identifier) => {
  return User.findOne({
    where: {
      [Op.or]: [{ username: identifier }, { email: identifier }],
    },
  });
};

const loginUserService = async (identifier, password) => {
  try {
    const user = await getUserByEmailOrUsername(identifier);

    if (!user) {
      throw new ErrorResponse("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ErrorResponse("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    const cookieOptions = {
      httpOnly: true,
      sameSite: "Lax",
      expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
    };
    /*
     * COOKIE OPTIONS: `sameSite`
     * - Use 'strict' if your backend and frontend shares same origin/host
     * - Use 'none' for different origins *Https required*.
     * - Try 'lax' for different origins, flexible with Http-Https requirements
     */

    if (process.env.NODE_ENV === "production") {
      cookieOptions.secure = true;
    }

    return { user, token, cookieOptions };
  } catch (error) {
    throw new ErrorResponse(error.message)
  }

};

module.exports = loginUserService;
