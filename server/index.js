import express from "express";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// database connection
dbConnection();

// Routes
app.use("/api/auth/user/", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on the PORT: ${PORT} ):`);
});
