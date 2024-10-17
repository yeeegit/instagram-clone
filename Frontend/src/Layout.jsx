import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import Rightbar from "./components/navigation/Rightbar";

function Layout() {
  return (
    <div className="flex bg-black flex-col md:flex-row min-h-screen">
      <div className="md:w-64">
        <Sidebar />
      </div>
      <div className="flex-grow flex flex-col justify-start">
        <Navbar />
        <main className="flex-grow w-full overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <div className="hidden md:block md:w-64">
        <Rightbar />
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-black">
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
