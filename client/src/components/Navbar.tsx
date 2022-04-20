import React from "react";
import { Link } from "react-router-dom";
import { ChatAlt2Icon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <nav className="h-14 flex items-center justify-between max-w-6xl mx-auto px-5">
        <h2 className="flex gap-2 items-center">
          <ChatAlt2Icon className="h-5 w-5 text-teal-500" />
          <span>MernChat</span>
        </h2>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
