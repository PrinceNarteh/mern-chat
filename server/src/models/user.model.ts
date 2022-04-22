import { Schema, model } from "mongoose";
import validator from "validator";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      index: true,
      unique: true,
      lowercase: true,
      required: [true, "Email is required."],
      validate: [validator.isEmail, "Invalid Email"],
    },
    password: {
      type: String,
      required: [true, "Can't be blank"],
    },
    profilePic: {
      type: String,
    },
    newMessages: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "online",
    },
  },
  {
    minimize: false,
  }
);

const User = model("User", userSchema);
export default User;
