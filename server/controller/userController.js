import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { errorHandler } from "../utils/error.js";
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
    return next(errorHandler(404, "All field are required!"));
  }

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      message: "User Registered Successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export const signin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(404, "All fields are required!"));
  }
  try {
    const validUser = User.findOne({ email });
    if (email !== validUser) {
      return next(errorHandler(500, "User not found!"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser);
    if (!validPassword) {
      return next(errorHandler(500, "You are entering wrong password!"));
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
