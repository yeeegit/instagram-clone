import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        formData,
        { withCredentials: true }
      );
      if (response.data.status) {
        toast.success(t("loginSuccess"));
        navigate("/");
      } else {
        toast.error(t("loginFailed"));
      }
    } catch (err) {
      if (err.response && !Array.isArray(err.response.data.message)) {
        // toast.error(t("serverError")); //TODO: Add different server error translation based on error messages.
        toast.error(err.response.data.message)
      } else if (err.response && Array.isArray(err.response.data.message)) {
        err.response.data.message.map((err) => toast.error(err));
      } else {
        toast.error(t("serverError"));
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 border border-gray-300 rounded-lg w-full max-w-xs md:max-w-md flex flex-col items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt="Instagram"
          className="mb-6 h-12 w-auto"
        />
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          <input
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            placeholder={t("usernameOrEmail")}
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            placeholder={t("password")}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {t("logIn")}
          </button>
        </form>
        <p className="text-sm mt-4">
          {t("noAccount")}{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            {t("signUp")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
