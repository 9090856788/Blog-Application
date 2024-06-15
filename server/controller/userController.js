import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { errorHandler } from "../middleware/error.js";
import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";

export const signup = catchAsyncErrors(async (req, res, next) => {
  const { userName, email, password } = req.body;
  if (
    !userName ||
    !email ||
    !password ||
    userName === "" ||
    email === "" ||
    password === ""
  ) {
    return next(new errorHandler(404, "All field are required!"));
  }

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = User({
      userName,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      message: "User Registered Successfully",
      newUser
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
