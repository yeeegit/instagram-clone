const { body } = require('express-validator')

const userRegisterValidator = [
  body('email')
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Please enter a valid email address.')
    .normalizeEmail(),

  body('fullname')
    .notEmpty().withMessage('Fullname is required.')
    .isLength({ min: 1, max: 64 }).withMessage("Enter a name under 64 characters.")
    .trim(),

  body('username')
    .notEmpty().withMessage('Username is required.')
    .isLength({ min: 1, max: 30 }).withMessage("Enter a name under 30 characters.")
    .trim(),

  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 8, max: 64 }).withMessage('Password must be between 8 and 64 characters long.')
    .matches(/[a-zA-Z]/).withMessage('Password must contain at least one letter.')
    .matches(/\d/).withMessage('Password must contain at least one number.')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character.'),

  body('dateOfBirth')
    .notEmpty().withMessage('Date of Birth is required.')
    .isDate({ format: 'YYYY-MM-DD' }).withMessage('Date of birth must be in YYYY-MM-DD format.')

]

module.exports = userRegisterValidator