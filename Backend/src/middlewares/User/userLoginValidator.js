const { body } = require("express-validator");

const loginValidator = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 1, max: 30 })
    .withMessage("Username must be between 1 and 30 characters."),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches(/[a-zA-Z]/)
    .withMessage("Password must contain at least one letter.")
    .matches(/\d/)
    .withMessage("Password must contain at least one number.")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character."),
];

module.exports = loginValidator;
