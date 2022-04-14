import mongoose from "mongoose";

export async function testConnectionToMongoDB(url: string) {
  try {
    const mongoDB = await mongoose.connect(url);
    return `connection to MongoDB v.${mongoDB.version} was success`;
  } catch (error) {
    return `connection failed: ${error}`;
  }
}
