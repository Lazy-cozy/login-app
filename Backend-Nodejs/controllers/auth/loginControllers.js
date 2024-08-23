import { validationResult } from "express-validator";

export const loginControllers = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ message: errorMessages[0], status: false });
    } else {
      res.send(req.body);
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
};
