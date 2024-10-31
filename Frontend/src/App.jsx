import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/home/Home";
import NotFound from "@/components/NotFound";
import Layout from "@/Layout";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import Messages from "@/pages/message/Messages";
import NewPost from "@/pages/post/NewPost";

const router = createBrowserRouter([
  {path: "/",element: <Layout />, children: [{ path: "/", element: <Home /> }]},
  { path: "messages", element: <Messages /> },
  { path: "explore", element: <div /> },
  { path: "reels", element: <div /> },
  { path: "notifications", element: <div /> },
  { path: "create-post", element: <NewPost /> },
  { path: "search", element: <div /> },
  { path: "profile", element: <div /> },
  { path: "settings", element: <div /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
