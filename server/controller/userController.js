import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { errorHandler } from "../utils/error.js";
import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// User SignUp Api
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

// user SignIn Api
export const signin = catchAsyncErrors(async (req, res, next) => {
  const { email, userName, password } = req.body;
  if (
    !email ||
    !password ||
    !userName ||
    email === "" ||
    password === "" ||
    userName === ""
  ) {
    return next(errorHandler(404, "All fields are required!"));
  }
  try {
    const validUser = User.findOne({ email });
    const validUserName = User.findOne({ userName });
    if (email !== validUser) {
      return next(errorHandler(500, "User not found!"));
    }
    if (userName !== validUserName) {
      return next(errorHandler(500, "User not found!"));
    }
    const validPassword = bcryptjs.compareSync(
      password,
      validUser.password,
      validUserName.password
    );
    if (!validPassword) {
      return next(errorHandler(500, "Invalid password!"));
    }
    // if userName/email and Password are correct then generate a web Token.
    const token = jwt.sign(
      {
        id: this._id,
      },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser.password;
    res
      .status(200)
      .cookie("access token", token, {
        httpOnly: true,
      })
      .json({
        message: "Sign in Successfully",
        ...rest,
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
