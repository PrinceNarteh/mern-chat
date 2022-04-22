import { Schema, model, Document, Model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

export interface IUser {
  name: string;
  email: string;
  password: string;
  picture: string;
  newMessages: object;
  status: "online" | "offline";
}

interface IUserDocument extends IUser, Document {}
interface UserModel extends Model<IUserDocument> {
  findByCredentials: (
    email: string,
    password: string
  ) => Promise<IUserDocument>;
}

const userSchema: Schema<IUserDocument> = new Schema(
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
    picture: {
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

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.statics.findByCredentials = async function (
  email: string,
  password: string
) {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid email or password");
  }
  return user;
};

const User = model<IUserDocument, UserModel>("User", userSchema);
export default User;
