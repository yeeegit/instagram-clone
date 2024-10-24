const registerUserService = require("../../services/Auth/registerUserService");
const {SuccessResponse,ErrorResponse,} = require("../../helpers/responseHandler");

const registerUserController = async (req, res) => {
  //Removed validation errors checking, look for 'validationErrorHandler.js' within helpers folder, i just turned it into a mini middleware for modularity
  try {
    const { fullname, username, email, password, role } = req.body;
    const newUser = await registerUserService( fullname, username, email, password, role);
      return res.status(201).send(new SuccessResponse("User registered successfully", newUser));
  } catch (error) {
    return res.status(500).send(new ErrorResponse(error.message));
  }
};

module.exports = registerUserController;
