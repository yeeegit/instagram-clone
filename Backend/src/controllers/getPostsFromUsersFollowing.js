const getPostsFromUsersFollowing = (req, res) => {
  const fakePosts = [
    {
      id: 1,
      username: "testuser1",
      userImage: "https://i.pravatar.cc/150?img=6",
      postImage: "/fakepostimg.jpg",
      content: "Testing post from user 1!",
      comments: [
        { commenter: "userA", text: "Nice post!" },
        { commenter: "userB", text: "Loved it!" },
      ],
    },
    {
      id: 2,
      username: "testuser2",
      userImage: "https://i.pravatar.cc/150?img=7",
      postImage: "/fakepostimg.jpg",
      content: "Another test post from user 2!",
      comments: [
        { commenter: "userC", text: "Great post!" },
        { commenter: "userD", text: "Awesome!" },
      ],
    },
  ];

  res.status(200).json({
    success: true,
    message: "Fetched posts successfully",
    data: fakePosts,
  });
};

module.exports = getPostsFromUsersFollowing;

//TODO, after creating necessary db models etc. remove hardcoded  posts.