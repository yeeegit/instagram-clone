const stories = [
  { username: "user1", image: "https://i.pravatar.cc/150?img=1" },
  { username: "user2", image: "https://i.pravatar.cc/150?img=2" },
  { username: "user3", image: "https://i.pravatar.cc/150?img=3" },
  { username: "user4", image: "https://i.pravatar.cc/150?img=4" },
  { username: "user5", image: "https://i.pravatar.cc/150?img=5" },
  { username: "user6", image: "https://i.pravatar.cc/150?img=6" },
  { username: "user7", image: "https://i.pravatar.cc/150?img=7" },
  { username: "user8", image: "https://i.pravatar.cc/150?img=8" },
  { username: "user9", image: "https://i.pravatar.cc/150?img=9" },
  { username: "user10", image: "https://i.pravatar.cc/150?img=10" },
];

const Navbar = () => {
  return (
    <div className="bg-black p-2 flex justify-center overflow-hidden">
      <div className="flex space-x-4 overflow-x-auto">
        {stories.map((story, index) => (
          <a key={index} href="#" className="flex flex-col items-center">
            <div className="w-16 h-16 p-0.5 rounded-full bg-gradient-border flex items-center justify-center">
              <img
                src={story.image}
                alt={story.username}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-white text-xs mt-1 text-center">
              {story.username}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
