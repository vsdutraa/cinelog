import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("Environment variable MONGODB_URI not found.");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
