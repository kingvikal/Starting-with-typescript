import { Request, Response } from "express";
import { User } from "../../models/user.entity";
import { validation } from "../Services/joiValidation";
import { AppDataSource } from "../../models/datasource";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRepository = AppDataSource.getRepository(User);

export const Register = async (req: Request, res: Response) => {
  try {
    const validate: any = await validation.validateAsync(req.body);

    if (!validate) {
      return res.status(404).json({ message: "validation failed" });
    } else {
      const emailuser = await userRepository.findOneBy({
        email: req.body.email,
      });

      if (emailuser) {
        return res
          .status(400)
          .json({ message: "Email already exists. Choose new one" });
      }
      const hashedPassword = bcrypt.hashSync(req.body.password, 12);

      const user: any = new User();
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.email = req.body.email;
      user.password = hashedPassword;
      user.username = req.body.username;

      await userRepository.save(user);

      return res
        .status(200)
        .json({ message: "User created Successfully", user });
    }
  } catch (err) {
    if (err.isJoi === true) {
      console.log(err);

      return res.status(422).json(err);
    }
    console.log(err);

    return res.status(500).json(err);
  }
};

export const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "No user with this email address exists" });
    }

    if (email && password) {
      const payload = { id: user.id, email: user.email };
      const option = { expiresIn: "1d" };
      const accessToken: any = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        option
      );

      const compare = bcrypt.compareSync(password, user.password);

      if (!compare) {
        return res.status(404).json({ message: "Password doesn't match" });
      } else {
        return res
          .status(200)
          .json({ message: "User login successfull", accessToken, user });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const user = userRepository.find();

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(400).json("Error");
    }
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
};
