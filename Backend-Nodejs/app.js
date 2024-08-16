import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { swaggerServe, swaggerSetup } from "./middleware/swagger.js";
import loginRouters from "./routes/auth/loginRouters.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Setup Swagger UI
app.use("/swagger", swaggerServe, swaggerSetup);

app.use("/api", loginRouters);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server running on port ${port}`));
