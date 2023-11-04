import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
