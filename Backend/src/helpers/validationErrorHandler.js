const { validationResult } = require("express-validator");
const expressValidatorHelper = require("./expressValidatorHelper");
const { ErrorResponse } = require("./responseHandler");

const validationErrorHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = expressValidatorHelper(errors);
    return res
      .status(400)
      .send(new ErrorResponse(formattedErrors))
  }
  next();
};

module.exports = validationErrorHandler;
