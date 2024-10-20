const { validationResult } = require("express-validator");
const registerUserService = require("../../services/Auth/registerUserService");
const expressValidatorHelper = require("../../helpers/expressValidatorHelper");

// *custom responses are not working when user registers react-toastify not showing any response.

const registerUserController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const resultOfResponsableErrors = expressValidatorHelper(errors);
    return res
      .status(400)
      .json({ success: false, message: resultOfResponsableErrors });
  }

  try {
    const { fullname, username, email, password, role } = req.body;
    const newUser = await registerUserService(
      fullname,
      username,
      email,
      password,
      role
    );

    if (newUser.success) {
      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: newUser.user,
      });
    } else {
      console.error(`Registration failed: ${newUser.message}`);
      return res.status(400).json({ success: false, message: newUser.message });
    }
  } catch (error) {
    console.error(`Error during registration: ${error.message}`);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = registerUserController;
