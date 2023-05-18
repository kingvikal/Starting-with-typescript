import { NextFunction, Request, Response } from "express";

export const isTeacher = (req: Request, res: Response, next: NextFunction) => {
  //@ts-ignore
  console.log(req.user.userType);

  //@ts-ignore

  if (!["teacher"].includes(req.user.userType)) {
    return res
      .status(401)
      .json({ status: false, message: "User role not assigned to student" });
  }

  next();
};
