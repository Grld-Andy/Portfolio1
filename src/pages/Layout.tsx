import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar/>
      <Outlet />
    </div>
  )
};

export default Layout;