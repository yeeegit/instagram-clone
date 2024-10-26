const express = require("express");
const router = express.Router();
const registerUserController = require("../../controllers/Auth/registerUserController");
const loginUserController = require("../../controllers/Auth/loginUserController");
const getPostsFromUsersFollowing = require("../../controllers/getPostsFromUsersFollowing");

const userRegisterValidator = require("../../middlewares/User/userRegistrationValidator");
const userLoginValidator = require("../../middlewares/User/userLoginValidator");
const authMiddleware = require("../../middlewares/authMiddleware");
const validationErrorHandler = require("../../helpers/validationErrorHandler");

// Placeholder till implemented
// TODO: move those to their own files after implementing
// const getReels = null;
// const getUserProfile = null;
// const getUserChats = null;
// const searchUser = null;
// const createPost = null;
// const updatePost = null;
// const deletePost = null;
// const deleteComment = null;
// const deleteLike = null;
// const likePost = null;
// const dislikePost = null;
// const commentPost = null;
// const userPhoto = null;
// const changeUsername = null;
// const createStory = null;
// const deleteStory = null;
// const getStoriesForUser = null;
// const getUserMessages = null;
// const sendMessage = null;
// const deleteMessage = null;
// const followUser = null;
// const unFollowUser = null;
// const getNotifications = null;
// const markNotificationRead = null;
// const getExplorePosts = null;

router.post(
  "/register",
  userRegisterValidator,
  validationErrorHandler,
  registerUserController
);
router.post(
  "/login",
  userLoginValidator,
  validationErrorHandler,
  loginUserController
);

router.get("/getMainPagePosts", authMiddleware, getPostsFromUsersFollowing);
// router.get("/getReels", authMiddleware, getReels);

// router.get("/getUserProfile/:id", authMiddleware, getUserProfile);
// router.get("/getUserChats", authMiddleware, getUserChats);
// router.get("/search", authMiddleware, searchUser);
// router.post("/upload-profile-photo", authMiddleware, userPhoto);
// router.post("/change-username", authMiddleware, changeUsername);

// router.post("/create-post", authMiddleware, createPost);
// router.put("/update-post/:id", authMiddleware, updatePost);
// router.delete("/delete-post/:id", authMiddleware, deletePost);

// router.delete("/delete-comment/:id", authMiddleware, deleteComment);
// router.delete("/delete-like/:id", authMiddleware, deleteLike);
// router.post("/like-post/:id", authMiddleware, likePost);
// router.post("/dislike-post/:id", authMiddleware, dislikePost);
// router.post("/comment-post/:id", authMiddleware, commentPost);

// router.post("/create-story", authMiddleware, createStory);
// router.delete("/delete-story/:id", authMiddleware, deleteStory);
// router.get("/get-stories/:userId", authMiddleware, getStoriesForUser);

// router.get("/messages/:userId", authMiddleware, getUserMessages);
// router.post("/messages/:userId", authMiddleware, sendMessage);
// router.delete("/messages/:messageId", authMiddleware, deleteMessage);

// router.post("/follow/:userId", authMiddleware, followUser);
// router.post("/unFollow/:userId", authMiddleware, unFollowUser);

// router.get("/notifications", authMiddleware, getNotifications);
// router.post("/notifications/:id/read", authMiddleware, markNotificationRead); // might change this to delete to clear notifications or add a isRead field to track if its seen.

// router.get("/explore", authMiddleware, getExplorePosts);

module.exports = router;
