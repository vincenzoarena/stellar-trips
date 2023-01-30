import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

// Load .env file
dotenv.config();

const app = express();

// Allow express to parse json
app.use(express.json());

// Cors
app.use(cors());

// Connect to MongoDB

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const port = process.env.DB_PORT || 5000;

mongoose
  .connect(dbConnectionString)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

// Routes
app.use("/api/users", userRoutes);
//app.use("/api/hotels", hotelRoutes);

// Start server
app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
