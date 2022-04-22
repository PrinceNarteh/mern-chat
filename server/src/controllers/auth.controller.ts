import { Request, Response } from "express";
import User from "../models/user.model";
import { loginSchema, registerSchema } from "../utils/validations";
import { StatusCodes } from "http-status-codes";

export const register = async (req: Request, res: Response) => {
  try {
    const data = await registerSchema.validateAsync(req.body, {
      abortEarly: false,
    });

    const user = await User.create(req.body);

    res.status(StatusCodes.CREATED).json(user);
  } catch (error: any) {
    let err: string[] = [];
    if (error?.name === "ValidationError") {
      err = error.details.map((errorDetail: any) => errorDetail.message);
    } else if (error?.code === 11000) {
      err.push("Email already in used");
    } else {
      err = error;
    }
    res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

export const login = async (req: Request, res: Response) => {};
