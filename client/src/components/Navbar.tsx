import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {ChatAlt2Icon} from "@heroicons/react/outline";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/solid";
import {useSelector} from "react-redux";
import {initialStateType, selectUser} from "../redux/features/userSlice";
import {useLogoutUserMutation} from "../services/appApi";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user: any = useSelector(selectUser());
  const [logoutUser] = useLogoutUserMutation();

  const logout = async (e: any) => {
    e.preventDefault();
    await logoutUser(user);
  };

  return (
    <div className="shadow-md">
      <nav className="h-14 flex items-center justify-between max-w-6xl mx-auto px-5 relative">
        <h2 className="flex gap-2 items-center">
          <ChatAlt2Icon className="h-5 w-5 text-[#48A3D8]" />
          <span>MernChat</span>
        </h2>
        <ul className="flex gap-5 items-center">
          {user && (
            <>
              <li>
                <NavLink to="/chat">Chat</NavLink>
              </li>

              <div className="relative">
                <button
                  id="dropdownDefault"
                  className="text-gray-500 space-x-2 border border-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <img className="w-6 h-6" src={user.picture} alt="" />
                  <span>John Doe</span>
                  <span>
                    {dropdownOpen ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <div
                  id="dropdown"
                  className={`${
                    dropdownOpen ? "" : "hidden"
                  } z-10 w-40 absolute top-12 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
                  data-popper-placement="bottom">
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefault">
                    <li>
                      <NavLink
                        to="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Earnings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Sign out
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {!user && (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="login">Login</NavLink>
              </li>
              <li>
                <NavLink to="register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
