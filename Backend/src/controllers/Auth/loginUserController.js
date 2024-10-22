const {
  SuccessResponse,
  ErrorResponse,
} = require("../../helpers/responseHandler");
const loginUserService = require("../../services/Auth/loginUserService");

const loginUserController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await loginUserService(username, password, res);
    return res.status(200).json(new SuccessResponse("Login successful", user));
    
  } catch (error) {
    return res.status(401).send(new ErrorResponse(error.message));
  }
};

module.exports = loginUserController;
