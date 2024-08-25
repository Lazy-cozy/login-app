import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/loginDB"
    );
    console.log(
      `MongoDB connected : ${
        connection.connection.host || "mongodb://localhost:27017/loginDB"
      }`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
