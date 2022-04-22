import React from "react";
import MessageForm from "../components/MessageForm";
import SideBar from "../components/SideBar";

const Chat = () => {
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
