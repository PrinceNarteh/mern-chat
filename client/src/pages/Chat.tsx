import React, {useEffect} from "react";
import MessageForm from "../components/MessageForm";
import SideBar from "../components/SideBar";
import {useAppContext} from "../context/appContext";

const Chat = () => {
  const {ws, setRooms, rooms} = useAppContext();

  useEffect(() => {
    ws.on("connection-success", (rooms) => {
      console.log(rooms);
      setRooms(rooms);
    });
  });

  return (
    <div className="flex h-[calc(100vh_-_3.5rem)] max-w-7xl mx-auto">
      <div className="w-4/12">
        <SideBar />
      </div>
      <div className="w-8/12">
        <MessageForm />
      </div>
    </div>
  );
};

export default Chat;
