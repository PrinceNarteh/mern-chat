import React from "react";
import { ChatIcon } from "@heroicons/react/solid";
import HomeBg from "../assets/home-bg.jpg";

const Home = () => {
  return (
    <div className="flex">
      <div className="h-[calc(100vh_-_3.5rem)] flex flex-col w-1/2 justify-center items-start pl-14">
        <h1 className="text-4xl font-semibold">Share the world with friends</h1>
        <p className="py-3 text-lg">Chat App lets you connect with the world</p>
        <button className="bg-teal-500 flex gap-1 py-2 px-4 rounded">
          <span>Get Started</span> <ChatIcon className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="h-[calc(100vh_-_3.5rem)] w-1/2">
        <img src={HomeBg} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Home;
