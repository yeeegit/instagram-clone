import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
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
      //TODO: add redirect to home page after login n register, add authorized pages to prevent non logged in visitors reach unwanted pages
      if (response.data.status) {
        // TODO: return success=true from backend if login is successful, change parameter to 'response.data.data.success'
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Login failed.");
      }
    } catch (err) {
      console.error(err.response.data.message);
      if(err.response && !Array.isArray(err.response.data.message)){
        toast.error(err.response.data.message)
      }
      else if(err.response && Array.isArray(err.response.data.message)){
        err.response.data.message.map(err=>toast.error(err))
      }
      else{
        toast.error("Server error")
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
            placeholder="Username or Email"
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
            Log In
          </button>
        </form>
        <p className="text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
