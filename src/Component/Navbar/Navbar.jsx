import { Link, NavLink } from "react-router-dom";
import navImg from './Nav_photo.jpeg'
import { useContext } from "react";
import '../Layout/Root.css';
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut, setLoading } = useContext(AuthContext);

  const setDarkMode =() =>{
    document.querySelector("body").setAttribute("data-theme", "dark");
  }

  const setLightMode =() =>{
    document.querySelector("body").setAttribute("data-theme", "light")
  }
  const toggleTheme = e =>{
    if(e.target.checked){
      setDarkMode()
      setLoading(false)
    }
    else setLightMode();
    setLoading(false)
  }
  const handleLogOut = () => {
    logOut();
  };

  const lists = (
    <div className="flex flex-col lg:flex-row gap-2 lg:mr-2">
      <li className="outline p-2 rounded-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#37c44e] text-lg underline font-bold"
              : isPending
              ? ""
              : "text-lg text_color font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="outline p-2 rounded-lg">
        <NavLink
          to="assignments"
          className={({ isActive, isPending }) =>
          isActive
          ? "text-[#37c44e] text-lg underline font-bold"
          : isPending
          ? ""
          : "text-lg text_color font-semibold"
          }
        >
          Assignments
        </NavLink>
      </li>
      {
        user ? 
        <li className="outline p-2 rounded-lg">
        <NavLink
          to="createAssignments"
          className={({ isActive, isPending }) =>
          isActive
          ? "text-[#37c44e] text-lg underline font-bold"
          : isPending
          ? ""
          : "text-lg text_color font-semibold"
          }
        >
          Create assignments
        </NavLink>
      </li>
        :
        undefined
      }
      {
        user ? 
        <li className="outline p-2 rounded-lg">
        <NavLink
          to="submitted"
          className={({ isActive, isPending }) =>
          isActive
          ? "text-[#37c44e] text-lg underline font-bold"
          : isPending
          ? ""
          : "text-lg text_color font-semibold"
          }
        >
          Submitted Assignments
        </NavLink>
      </li>
        :
        undefined
      }
      
    </div>
  );
  return (
    <div className="navbar bg-base-300  text-[#3a3939f5]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" text-center dropdown-content mt-3 z-[1] p-2 shadow bg-[#fffafaf0] rounded-box w-52"
          >
            {lists}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-[50px] h-[50px] rounded-full" src={navImg} alt="" />
          <p className="text-lg md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#37c44e] to-[#269136]">
          Online Group-Study
          </p>
        </div>
      </div>

      <div className="navbar-end items-center gap-2">
        <div className="navbar-center hidden lg:flex">
          <ul className="px-1 ">{lists}</ul>
        </div>
        <button><input onChange={toggleTheme} type="checkbox" className="toggle"/></button>
        {user?.email ? (
          <div className="dropdown dropdown-end">
         <div  className="tooltip tooltip-left" data-tip={user.displayName}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-11 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
              </label>
              </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#37c44e] rounded-box w-52"
            >
              <li>
                <p className="btn btn-sm text-white btn-ghost">{user.displayName}</p>
              </li>
              {
        user ? 
        <li className=" p-2 rounded-lg">
        <NavLink
          to="myAssignments"
          className={({ isActive, isPending }) =>
          isActive
          ? "text-[#37c44e] text-lg underline font-bold"
          : isPending
          ? ""
          : "text-lg text-white font-semibold"
          }
        >
          My assignments
        </NavLink>
      </li>
        :
        undefined
      }
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm btn-ghost border-0 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn border-0 bg-[#37c44e] hover:bg-[#269136] text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
