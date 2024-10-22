import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        formData
      );

      if (response.data.data.success) {
        toast.success("Registration successful! Please log in.");
      } else {
        toast.error("Registration failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response ? err.response.data.message : "Server error.");
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
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            placeholder="Username"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
