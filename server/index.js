import express from "express";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// database connection
dbConnection();

app.listen(PORT, () => {
  console.log(`Server running on the PORT: ${PORT} ):`);
});
