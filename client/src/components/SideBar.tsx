import React from "react";
import {useSelector} from "react-redux";
import {useAppContext} from "../context/appContext";
import {selectUser} from "../redux/features/userSlice";

const SideBar = () => {
  const rooms = ["First Room", "Second Room", "Third Room", "Forth Room"];
  const user = useSelector(selectUser());
  const {ws} = useAppContext();

  ws.off("new-user").on("new-user", (payload) => {
    console.log(payload);
  });

  return (
    <div>
      <h1 className="text-xl text-[#48A3D8] font-bold mt-5 w-7/12 mx-auto">
        Available Rooms
      </h1>

      <div className="w-7/12 mx-auto mt-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded  dark:border-gray-600 dark:text-white">
        {rooms.map((room, index) => (
          <a
            key={index}
            href="#"
            aria-current="true"
            className="block w-full px-4 py-2 text-gray-800 bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:hover:bg-gray-200 dark:bg-gray-100 dark:border-gray-600">
            {room}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
