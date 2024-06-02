const asyncHandler = require("express-async-handler");
const User = require("../models/teacherModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a teacher
//@route POST /api/users/teacherResgister
//@access public
const registerTeacher = asyncHandler(async (req, res) => {
  const { id, name, email, phoneNo, password } = req.body;
  if (!id || !name || !email || !phoneNo || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    id,
    name,
    email,
    phoneNo,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc Login a teacher
//@route POST /api/users/teacherLogin
//@access public
const loginTeacher = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("No user found with this email");
  }
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401);
      throw new Error("Email or password is not valid");
    } else {
      console.log("login successfull");
    }
  }
});

module.exports = { registerTeacher, loginTeacher };


