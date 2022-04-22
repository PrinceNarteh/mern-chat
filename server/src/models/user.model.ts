import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Email is required."],
      validate: [validator.isEmail, "Invalid Email"],
    },
    password: {
      type: String,
      required: [true, "Can't be blank"],
      minlength: 6,
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
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = model("User", userSchema);
export default User;
