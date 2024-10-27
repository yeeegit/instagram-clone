const { SuccessResponse, ErrorResponse, } = require("../../helpers/responseHandler");
const responseMessages = require('../../helpers/responseMessages')
const loginUserService = require("../../services/Auth/loginUserService");

const loginUserController = async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const { userWithoutPassword, token, cookieOptions } = await loginUserService(identifier, password)
    res.cookie("token", token, cookieOptions);

    return res
      .status(200)
      .send(new SuccessResponse(responseMessages.LOGIN_SUCCESFUL, userWithoutPassword));
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message));
  }
};

module.exports = loginUserController;
