import React, { useEffect, useState } from "react";
import { Menu, Bell, Server, Database, RefreshCw, Archive } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/userSlice";
import replications from "./replications";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  const localAdmin = localStorage.getItem("admin");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localUser = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex justify-end items-center p-5 gap-4">
      <Bell className="text-gray-600 hover:text-blue-600 cursor-pointer" />
      <div className="relative">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Profile"
          className="h-10 w-10 rounded-full cursor-pointer border border-gray-300"
          // onMouseEnter={() => setIsDropdownOpen((prev) => !prev)}
          // onMouseLeave={() => setIsDropdownOpen((prev) => !prev)}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              {user?.username || localUser?.username}
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              {user?.team || localUser?.team}
            </a>
            <button
              className="block px-4 py-2 hover:bg-gray-100 w-11/12 "
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
