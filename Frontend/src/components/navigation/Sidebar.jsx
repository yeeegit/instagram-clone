import { Link } from "react-router-dom";
import {
  FaHome,
  FaRegEnvelope,
  FaBell,
  FaCompass,
  FaVideo,
  FaPlusCircle,
  FaCog,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();

  const links = [
    { to: "/", icon: <FaHome className="text-xl" />, label: t("sidebar.home") },
    {
      to: "/search",
      icon: <FaSearch className="text-xl" />,
      label: t("sidebar.search"),
    },
    {
      to: "/messages",
      icon: <FaRegEnvelope className="text-xl" />,
      label: t("sidebar.messages"),
    },
    {
      to: "/explore",
      icon: <FaCompass className="text-xl" />,
      label: t("sidebar.explore"),
    },
    {
      to: "/reels",
      icon: <FaVideo className="text-xl" />,
      label: t("sidebar.reels"),
    },
    {
      to: "/notifications",
      icon: <FaBell className="text-xl" />,
      label: t("sidebar.notifications"),
    },
    {
      to: "/create-post",
      icon: <FaPlusCircle className="text-xl" />,
      label: t("sidebar.createPost"),
    },
    {
      to: "/profile",
      icon: <FaUser className="text-xl" />,
      label: t("sidebar.profile"),
    },
    {
      to: "/settings",
      icon: <FaCog className="text-xl" />,
      label: t("sidebar.settings"),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full md:sticky md:top-0 md:w-64 bg-black text-white h-16 md:h-screen p-2 md:p-4  md:border-r border-r-gray-700">
      <div className="hidden md:flex items-center mb-6 justify-center md:justify-start">
        <svg
          aria-label="Instagram"
          className="w-7 h-7 md:w-8 md:h-8"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Instagram Clone</title>
          <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
        </svg>
        <h1 className="ml-2 text-lg font-bold hidden md:inline">Instagram</h1>
      </div>

      <nav className="flex justify-between md:flex-col space-x-4 md:space-x-0 md:space-y-4">
        {links.map(({ to, icon, label }, index) => (
          <Link
            key={index}
            to={to}
            className="flex items-center justify-center md:justify-start text-base font-bold hover:bg-gray-800 transition-colors p-2 rounded"
          >
            {icon}
            <span className="ml-2 hidden md:inline">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
