import mongoose from "mongoose";
const url = "mongodb://localhost:27017/test";

async function connection() {
  try {
    await mongoose.connect(url);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log("Error connection");
  }
}

export default connection;
