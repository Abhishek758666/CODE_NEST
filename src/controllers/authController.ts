import { Request, Response } from "express";
import User from "../database/models/authModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class AuthController {
  public static async Login(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "incomplete credentials",
      });
      return;
    }

    const [userExist] = await User.findAll({
      where: {
        email: email,
      },
    });

    if (userExist) {
      res.status(400).json({
        message: "user already exist",
      });
      return;
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    User.create({
      username,
      email,
      password: hashPassword,
    });
  }

  public static async Register(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "incomplete credentials",
      });
      return;
    }

    const [userData] = await User.findAll({
      where: {
        email: email,
      },
    });
    if (!userData) {
      res.status(404).json({
        message: "invalid credentials",
      });
    }

    const verifyUser = bcrypt.compareSync(password, userData.password);
    if (!verifyUser) {
      res.status(404).json({
        message: "invalid credentials",
      });
      return;
    }

    const token = jwt.sign(userData.id, "", {
      expiresIn: "24h",
    });

    res.status(200).json({
      message: "logged in successfully",
      token,
    });
  }
}

export default AuthController;
