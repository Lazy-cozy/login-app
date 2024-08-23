import { Router } from "express";
import { loginControllers } from "../../controllers/auth/loginControllers.js";
import { checkSchema } from "express-validator";

const router = Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - Authentication
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Success
 *
 *
 */

const loginSchema = {
  username: {
    in: ["body"],
    isString: true,
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
    trim: true,
    escape: true,
  },
  password: {
    in: ["body"],
    isString: true,
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
    trim: true,
    escape: true,
  },
};

router.post("/login", checkSchema(loginSchema), loginControllers);

export default router;
