const fakeUsers = [
  { username: "user1", image: "https://i.pravatar.cc/150?img=11" },
  { username: "user2", image: "https://i.pravatar.cc/150?img=12" },
  { username: "user3", image: "https://i.pravatar.cc/150?img=13" },
  { username: "user4", image: "https://i.pravatar.cc/150?img=14" },
  { username: "user5", image: "https://i.pravatar.cc/150?img=15" },
];

const Rightbar = () => {
  return (
    <div className="w-64 h-screen p-4 bg-black text-white">
      <h2 className="text-lg mb-4">You Might Follow</h2>
      <div className="space-y-4">
        {fakeUsers.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={user.image}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-sm font-medium">{user.username}</p>
            </div>
            <button className="text-blue-500 text-xs">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightbar;
