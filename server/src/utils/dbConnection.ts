import mongoose from "mongoose";
import { logger } from "./logger";

export const dbConnection = async () => {
  try {
    const connectionString = process.env.DB_CONNECTION;
    if (!connectionString) {
      throw new Error(
        "Please provide the connection for the database in the .env"
      );
    } else {
      await mongoose.connect(connectionString);
      logger.info("Connected to database successfully.");
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
