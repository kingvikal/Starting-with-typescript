import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../../models/user.entity";
import { AppDataSource } from "../../models/datasource";

dotenv.config();

const userRepository = AppDataSource.getRepository(User);

export const IsUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqHeaders = req.headers.authorization;

    const token = reqHeaders && reqHeaders.split(" ")[1];

    if (!token) {
      return res
        .status(400)
        .json({ message: "No token provided. Access Denied" });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET);

    const user: any = await userRepository.findBy(decoded.id);

    if (!user) {
      return res.status(400).json("invalid");
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
