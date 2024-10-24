const {
  SuccessResponse,
  ErrorResponse,
} = require("../../helpers/responseHandler");
const loginUserService = require("../../services/Auth/loginUserService");

const loginUserController = async (req, res) => {
  console.log(req.body)
  const { identifier, password } = req.body;

  try {
    const { user, token, cookieOptions } = await loginUserService(identifier, password)
    res.cookie("token", token, cookieOptions);

    const { password: _, ...userWithoutPassword } = user.toJSON();

    return res
      .status(200)
      .send(new SuccessResponse("Login successful", userWithoutPassword));
  } catch (error) {
    return res.status(401).send(new ErrorResponse(error.message));
  }
};

module.exports = loginUserController;
