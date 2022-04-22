import React from "react";

const MessageForm = () => {
  return (
    <div className="flex flex-col h-[calc(100vh_-_3.5rem)]">
      <div className="flex-grow">Message Output</div>
      <form className="bg-slate-500">
        <input
          type="text"
          className="w-11/12 border border-[#48A3D8] outline-none"
        />
        <button className="text-center">Send</button>
      </form>
    </div>
  );
};

export default MessageForm;
