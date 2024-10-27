const registerUserService = require("../../services/Auth/registerUserService");
const {SuccessResponse,ErrorResponse,} = require("../../helpers/responseHandler");
const responseMessages= require('../../helpers/responseMessages')

const registerUserController = async (req, res) => {
  //Removed validation errors checking, look for 'validationErrorHandler.js' within helpers folder, i just turned it into a mini middleware for modularity
  try {
    const { fullname, username, email, password, role } = req.body;
    const newUser = await registerUserService( fullname, username, email, password, role);
      return res.status(201).send(new SuccessResponse(responseMessages.USER_REGISTERED, newUser));
  } catch (error) {
    return res.status(error.statusCode).send(new ErrorResponse(error.message));
  }
};

module.exports = registerUserController;
