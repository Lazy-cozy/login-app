import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Login-API",
    version: "v1",
    description: "API for Login Page.",
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/auth/loginController*.js"], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJsdoc(options);
export const swaggerSetup = swaggerUi.setup(swaggerSpec);
export const swaggerServe = swaggerUi.serve;
