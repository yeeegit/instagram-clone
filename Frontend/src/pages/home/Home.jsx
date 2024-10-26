import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/getMainPagePosts`,
          { withCredentials: true }
        );

        setPosts(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(t("failedToLoadPosts"));
        setLoading(false);
      }
    };

    fetchPosts();
  }, [t]); //translation updates on language change with dependency 't'

  if (loading) return <div>{t("loading")}</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-black min-h-screen p-2 flex flex-col items-center">
      <div className="space-y-4 w-full max-w-2xl">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-black p-3 flex flex-col w-[90%] md:w-[60%] mx-auto"
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
                {t("viewAllComments")}
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
