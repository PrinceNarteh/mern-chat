import bcrypt from "bcrypt";
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";

import User from "../models/user.model";
import {loginSchema, registerSchema} from "../utils/validations";

export const register = async (req: Request, res: Response) => {
  try {
    // validate data
    const data = await registerSchema.validateAsync(req.body, {
      abortEarly: false,
    });

    // create user
    const user = await User.create(data);

    res.status(StatusCodes.CREATED).json(user);
  } catch (error: any) {
    let err: string[] = [];
    if (error?.name === "ValidationError") {
      err = error.details.map((errorDetail: any) => errorDetail.message);
    } else if (error?.code === 11000) {
      err.push("Email already in used");
    } else {
      err.push(error.message);
    }
    res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password} = await loginSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    let user = await User.findByCredentials(email, password);
    user.status = "online";
    await user.save();
    res.status(StatusCodes.OK).json(user);
  } catch (error: any) {
    let err: string[] = [];
    if (error?.name === "ValidationError") {
      err = error.details.map((errorDetail: any) => errorDetail.message);
    } else {
      err.push(error.message);
    }
    res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};
