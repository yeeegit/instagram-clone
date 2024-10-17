import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/NotFound";
import Layout from "./Layout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "search", element: <div /> },
      { path: "messages", element: <div /> },
      { path: "explore", element: <div /> },
      { path: "reels", element: <div /> },
      { path: "notifications", element: <div /> },
      { path: "create-post", element: <div /> },
      { path: "profile", element: <div /> },
      { path: "settings", element: <div /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
