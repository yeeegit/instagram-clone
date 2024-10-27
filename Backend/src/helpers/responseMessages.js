const USER_DATA_UNCHANGED = "No changes made to User, as the provided data is identical to the existing data"

//Exists messages
const EMAIL_ALREADY_EXISTS = 'Email already exists';
const USERNAME_ALREADY_EXISTS = 'Username already exists';


//Invalid messages
const INVALID_CREDENTIALS = 'Invalid credentials';

//Success messages
const USER_REGISTERED = 'User registered successfully';
const LOGIN_SUCCESFUL = 'Login successful'
const USER_UPDATED = 'User updated succesfully'

//Not found messages
const USER_NOT_FOUND = 'User not found'

module.exports = {
  EMAIL_ALREADY_EXISTS, USERNAME_ALREADY_EXISTS, INVALID_CREDENTIALS, USER_REGISTERED, LOGIN_SUCCESFUL,
  USER_NOT_FOUND, USER_DATA_UNCHANGED, USER_UPDATED
};