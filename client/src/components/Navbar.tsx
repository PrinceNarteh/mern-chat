import React from "react";
import {NavLink} from "react-router-dom";
import {ChatAlt2Icon} from "@heroicons/react/outline";
import {useSelector} from "react-redux";
import {selectUser} from "../redux/features/userSlice";

const Navbar = () => {
  const user = useSelector(selectUser());
  console.log(user);

  return (
    <div className="shadow-md">
      <nav className="h-14 flex items-center justify-between max-w-6xl mx-auto px-5">
        <h2 className="flex gap-2 items-center">
          <ChatAlt2Icon className="h-5 w-5 text-[#48A3D8]" />
          <span>MernChat</span>
        </h2>
        <ul className="flex gap-5">
          {user && (
            <>
              <li>
                <NavLink to="/chat">Chat</NavLink>
              </li>

              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                Dropdown button{" "}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <div
                id="dropdown"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                  margin: "0px",
                  transform: "translate3d(391.2px, 681.6px, 0px)",
                }}
                data-popper-placement="bottom">
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefault">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
          {!user && (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
