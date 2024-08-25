import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import connectDB from "../configs/db.js";
import LoginModel from "../models/loginModel.js";

// Run this script once to add the username and password to the database.

const dummyData = async () => {
  try {
    await connectDB();

    const username = "admin";
    const password = "123";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new LoginModel({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("User added successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

dummyData();
