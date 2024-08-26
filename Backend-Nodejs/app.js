import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { swaggerServe, swaggerSetup } from "./middleware/swagger.js";
import loginRouters from "./routes/auth/loginRouters.js";
import connectDB from "./configs/db.js";

dotenv.config();
const app = express();
connectDB();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/swagger", swaggerServe, swaggerSetup);
app.use("/api", loginRouters);

app.listen(port, () => console.log(`Server running on port ${port}`));


// ToDo
// loginschema better name
//common validation
//text Error message
//