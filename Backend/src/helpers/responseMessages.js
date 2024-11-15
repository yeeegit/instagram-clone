const USER_DATA_UNCHANGED = "No changes made to User, as the provided data is identical to the existing data"

//Exists messages
const EMAIL_ALREADY_EXISTS = 'Email already exists';
const USERNAME_ALREADY_EXISTS = 'Username already exists';
const POST_ALREADY_SAVED = 'Post already saved'
const USER_ALREADY_FOLLOW = 'User already following this user'


//Invalid messages
const INVALID_CREDENTIALS = 'Invalid credentials';
const INVALID_MEDIATYPE = 'Invalid file type. Only image and video files are allowed.'

//Success messages
const USER_REGISTERED = 'User registered successfully';
const LOGIN_SUCCESFUL = 'Login successful'
const USER_UPDATED = 'User updated successfully'
const POST_CREATED_SUCCESSFULLY = 'Post created successfully'
const POST_UPDATED_SUCCESSFULLY = 'Post updated successfully'
const POST_DELETED_SUCCESSFULLY = 'Post deleted successfully'
const POST_SAVED_SUCCESSFULLY = 'Post saved successfully'
const POST_UNSAVED_SUCCESSFULLY = 'Post unsaved successfully'
const FOLLOWERS_RETRIEVED_SUCCESSFULLY = 'Followers retrieved successfully.'
const FOLLOWING_LIST_RETRIEVED_SUCCESSFULLY = 'Following list retrieved successfully.'

//Unsuccessful messages
const NO_POST_WAS_DELETED = 'No post was deleted'
const POST_NOT_SAVED_YET = 'Post not saved yet'

//Not found messages
const USER_NOT_FOUND = 'User not found';
const POST_NOT_FOUND = 'Post not found'
const MEDIA_FILE_NOT_FOUND = 'Media file not found'

//Founded messages
const USER_SUCCESSFULLY_FOUNDED = 'User successfully found'

module.exports = {
  EMAIL_ALREADY_EXISTS, USERNAME_ALREADY_EXISTS, INVALID_CREDENTIALS, USER_REGISTERED, LOGIN_SUCCESFUL,
  USER_NOT_FOUND, USER_DATA_UNCHANGED, USER_UPDATED, USER_SUCCESSFULLY_FOUNDED, POST_NOT_FOUND, NO_POST_WAS_DELETED,
  POST_CREATED_SUCCESSFULLY, POST_UPDATED_SUCCESSFULLY, POST_DELETED_SUCCESSFULLY, POST_SAVED_SUCCESSFULLY,
  POST_UNSAVED_SUCCESSFULLY, POST_ALREADY_SAVED, POST_NOT_SAVED_YET, MEDIA_FILE_NOT_FOUND,
  INVALID_MEDIATYPE, USER_ALREADY_FOLLOW,FOLLOWERS_RETRIEVED_SUCCESSFULLY,FOLLOWING_LIST_RETRIEVED_SUCCESSFULLY
};