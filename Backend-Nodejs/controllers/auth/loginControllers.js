import { validationResult } from "express-validator";
import LoginModel from "../../models/loginModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const loginControllers = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ message: errorMessages[0], status: false });
    } else {
      const { username, password } = req.body;
      const user = await LoginModel.findOne({ username: username });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid credentials", status: false });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res
          .status(401)
          .json({ message: "Invalid credentials", status: false });
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TOKEN_EXPIRY,
      });
      res.status(200).json({
        message: "Login successfully",
        status: true,
        username: username,
        accessToken: token,
      });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
};
