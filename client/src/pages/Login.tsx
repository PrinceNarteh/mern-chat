import React from "react";
import LoginBg from "../assets/login.jpg";
import useForm from "../hooks/useForm";

const Login = () => {
  const { values, onChangeHandler, onSubmitHandler } = useForm(
    { email: "", password: "" },
    loginUser
  );

  function loginUser() {
    console.log("User Logged In");
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-[calc(100vh_-_3.5rem)] flex-1">
        <img src={LoginBg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="h-[calc(100vh_-_3.5rem)] flex flex-col flex-1 justify-center items-center max-w-full ">
        <h1 className="text-4xl text-[#48A3D8] mb-5">Login</h1>
        <form className="w-1/2" onSubmit={onSubmitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-500 text-lg font-semibold"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="border-2 border-[#b8e6f5] rounded-sm mt-2 w-full py-1 px-2 outline-none"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="block text-white text-lg font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border-2 border-[#b8e6f5] rounded-sm mt-2 w-full py-1 px-2 outline-none"
              onChange={onChangeHandler}
              required
            />
          </div>
          <label htmlFor="checkbox" className="block mt-3 text-gray-500">
            <input type="checkbox" id="checkbox" /> Keep me signed in
          </label>
          <button
            type="submit"
            className="block bg-[#48A3D8] text-white mt-5 px-5 py-1"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
