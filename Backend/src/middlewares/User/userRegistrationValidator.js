const { body } = require("express-validator");

const userRegisterValidator = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .normalizeEmail(),

  body("fullname")
    .trim()
    .isLength({ min: 1, max: 64 })
    .withMessage("Fullname must be between 1 and 64 characters."),

  body("username")
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage("Username must be between 1 and 30 characters."),

  body("password")
    .isLength({ min: 8, max: 64 })
    .withMessage("Password must be between 8 and 64 characters.")
    .matches(/[a-zA-Z]/)
    .withMessage("Password must contain at least one letter.")
    .matches(/\d/)
    .withMessage("Password must contain at least one number.")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character."),

  body("dateOfBirth")
    .optional()
    .isDate({ format: "YYYY-MM-DD" })
    .withMessage("Date of birth must be in YYYY-MM-DD format."),
];

module.exports = userRegisterValidator;
