const fakePosts = [
  {
    id: 1,
    username: "user1",
    userImage: "https://i.pravatar.cc/150?img=1",
    postImage: "/fakepostimg.jpg",
    content: "This is the first post!",
    comments: [
      { commenter: "commenter1", text: "Great post!" },
      { commenter: "commenter2", text: "Really enjoyed this!" },
    ],
  },
  {
    id: 2,
    username: "user2",
    userImage: "https://i.pravatar.cc/150?img=2",
    postImage: "/fakepostimg.jpg",
    content: "Here’s another interesting post!",
    comments: [
      { commenter: "commenter1", text: "Awesome view!" },
      { commenter: "commenter2", text: "Love this!" },
    ],
  },
  {
    id: 3,
    username: "user3",
    userImage: "https://i.pravatar.cc/150?img=3",
    postImage: "/fakepostimg.jpg",
    content: "Check out this amazing view!",
    comments: [
      { commenter: "commenter1", text: "So beautiful!" },
      { commenter: "commenter2", text: "Incredible scenery!" },
    ],
  },
  {
    id: 4,
    username: "user4",
    userImage: "https://i.pravatar.cc/150?img=4",
    postImage: "/fakepostimg.jpg",
    content: "Enjoying the day with friends!",
    comments: [
      { commenter: "commenter1", text: "Looks like a fun day!" },
      { commenter: "commenter2", text: "Wish I was there!" },
    ],
  },
  {
    id: 5,
    username: "user5",
    userImage: "https://i.pravatar.cc/150?img=5",
    postImage: "/fakepostimg.jpg",
    content: "Just chilling at home.",
    comments: [
      { commenter: "commenter1", text: "Sometimes you just need a day in!" },
      { commenter: "commenter2", text: "Enjoy your relaxation!" },
    ],
  },
];

const Home = () => {
  return (
    <div className="bg-black min-h-screen p-2 flex flex-col items-center">
      <div className="space-y-4 w-full max-w-2xl">
        {fakePosts.map((post) => (
          <div
            key={post.id}
            className="bg-black p-3 flex flex-col w-[90%] md:w-[60%] mx-auto" // Use w-90 for mobile, w-60 for PC
          >
            <div className="flex items-center space-x-4 mb-2">
              <img
                src={post.userImage}
                alt={post.username}
                className="w-12 h-12 rounded-full"
              />
              <h2 className="text-white font-bold">{post.username}</h2>
            </div>
            <img
              src={post.postImage}
              alt={`Post by ${post.username}`}
              className="w-full h-[144] object-cover rounded-lg mb-2"
            />
            <p className="text-white mb-2">{post.content}</p>
            <div className="text-gray-400 text-sm mb-2">
              <a href="#" className="text-white font-bold hover:underline">
                View all comments
              </a>
            </div>
            <div className="space-y-1 mb-4">
              {post.comments.map((comment, index) => (
                <div key={index} className="text-white text-sm">
                  <span className="font-bold">{comment.commenter}: </span>
                  <span>{comment.text}</span>
                </div>
              ))}
            </div>
            <span className="block h-1 bg-gray-700 my-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
