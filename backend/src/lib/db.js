import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/live-chat";
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    // Mongoose v6+ and the underlying Node driver no longer need
    // useNewUrlParser/useUnifiedTopology options. Call connect with the URI only.
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};