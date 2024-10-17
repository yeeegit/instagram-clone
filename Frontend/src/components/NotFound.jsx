import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 p-4">
      <div className="mb-6">
        <svg
          className="w-24 h-24 text-gray-400 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 3v1.5m4.5-1.5v1.5M12 4.5a8.25 8.25 0 100 16.5A8.25 8.25 0 0012 4.5zm-3 8.25h6"
          />
        </svg>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
        Page Not Found
      </h1>
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-8 text-center max-w-md px-4">
        Sorry, the page you&apos;re looking for isn&apos;t available. You might
        have the wrong link, or the page may have been moved.
      </p>
      <Link
        to="/"
        className="text-white bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-lg text-sm font-medium shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
