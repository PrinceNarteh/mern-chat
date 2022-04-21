import React, { ChangeEvent, useState } from "react";
import RegisterBg from "../assets/signup.jpg";
import useForm from "../hooks/useForm";
import Avatar from "../assets/avatar.png";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { uploadImage } from "../services/uploadImage";

const Register = () => {
  const { values, onChange, onSubmit } = useForm(
    { email: "", password: "" },
    loginUser
  );

  // Image upload states
  const [image, setImage] = useState<File | null>(null);
  const [uploadImg, setUploadImg] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function validateImg(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files;
    if (file && file[0].size >= 1048576) {
      return alert("Max image size is 1mb");
    } else if (file) {
      setImage(file[0]);
      setImagePreview(URL.createObjectURL(file[0]));
    }
  }

  function loginUser() {
    if (!image) {
      return alert("Please upload your profile picture");
    }
    uploadImage(image, setUploadImg);
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-[calc(100vh_-_3.5rem)] flex flex-col flex-1 justify-center items-center max-w-full ">
        <h1 className="text-4xl text-[#48A3D8] mb-5">Register</h1>
        <form className="w-1/2" onSubmit={onSubmit}>
          <div className="relative w-fit mx-auto rounded-full">
            <img
              src={imagePreview || Avatar}
              alt="avatar"
              className="w-28 h-28 rounded-full"
            />
            <label
              htmlFor="image-upload"
              className="absolute right-3 -bottom-2 cursor-pointer p-1"
            >
              <PlusCircleIcon className="w-6 h-6" />
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/png, image/jpe g"
              onChange={validateImg}
              hidden
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-500 text-lg font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border-2 border-[#b8e6f5] rounded-sm mt-2 w-full py-1 px-2 outline-none"
              onChange={onChange}
            />
          </div>
          <div className="mt-3">
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
              onChange={onChange}
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="block text-gray-500 text-lg font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border-2 border-[#b8e6f5] rounded-sm mt-2 w-full py-1 px-2 outline-none"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="block bg-[#48A3D8] text-white mt-5 px-5 py-1"
          >
            Login
          </button>
        </form>
      </div>
      <div className="h-[calc(100vh_-_3.5rem)] flex-1">
        <img src={RegisterBg} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Register;
