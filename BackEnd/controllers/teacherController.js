const asyncHandler = require("express-async-handler");
const User = require("../models/teacherModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a teacher
//@route POST /api/user/teacherResgister
//@access public
const registerTeacher = asyncHandler(async (req, res) => {
  const { name, email, phoneNo, password } = req.body;
  if (!name || !email || !phoneNo || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userAvailable = await User.findOne({
    $or: [{ email }, { phoneNo }],
  });
  if (userAvailable) {
    let errorMessage = "User already registered with this ";
    if (userAvailable.email === email) {
      errorMessage += "email";
    } else if (userAvailable.phoneNo === phoneNo) {
      errorMessage += "phone number";
    }
    res.status(400).json(errorMessage);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    phoneNo,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json("User created successfully");
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
    res.status(404).json("Invalid credentials");
    throw new Error("No user found with this email");
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

module.exports = { registerTeacher, loginTeacher };
