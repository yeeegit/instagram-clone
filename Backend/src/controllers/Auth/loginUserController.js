const bcrypt = require("bcrypt");
const User = require("../../models/User");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const {
  SuccessResponse,
  ErrorResponse,
} = require("../../helpers/responseHandler");

const loginUserController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email: username }],
      },
    });

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

    if (process.env.NODE_ENV === "production") {
      cookieOptions.secure = true;
    }

    res.cookie("token", token, cookieOptions);

    const { password: _, ...userWithoutPassword } = user.toJSON();

    return res
      .status(200)
      .json(new SuccessResponse("Login successful", userWithoutPassword));
  } catch (error) {
    return res.status(401).send(new ErrorResponse(error.message));
  }
};

module.exports = loginUserController;
