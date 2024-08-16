import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /api/dummy:
 *   get:
 *     tags:
 *       - Login
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: A name in the list.
 */

router.get("/dummy", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

export default router;
