import { NextFunction, Request, Response } from "express";

interface TeacherRequest extends Request {
  user: any;
}


export const isTeacher = (req: TeacherRequest, res: Response, next: NextFunction) => {

  if (!["teacher"].includes(req.user.userType)) {
    return res
      .status(401)
      .json({ status: false, message: "User role not assigned to student" });
  }

  next();
};
