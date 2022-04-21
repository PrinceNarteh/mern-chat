import React from "react";
import { NavLink } from "react-router-dom";
import { ChatAlt2Icon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <nav className="h-14 flex items-center justify-between max-w-6xl mx-auto px-5">
        <h2 className="flex gap-2 items-center">
          <ChatAlt2Icon className="h-5 w-5 text-[#48A3D8]" />
          <span>MernChat</span>
        </h2>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/chat">Chat</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
