const asyncHandler = require("express-async-handler");
const User = require("../models/studentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a student
//@route POST /user/studentResgister
//@access public
const registerStudent = asyncHandler(async (req, res) => {
  const { name, rollNo, course, semester, email, phoneNo, password } = req.body;
  if (
    !name ||
    !rollNo ||
    !course ||
    !semester ||
    !email ||
    !phoneNo ||
    !password
  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400).json("User already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    rollNo,
    course,
    semester,
    email,
    phoneNo,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json("User registered successfully");
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc Login a student
//@route POST /user/studentLogin
//@access public
const loginStudent = asyncHandler(async (req, res) => {
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
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          id: user._id,
          email: user.email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ token: accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

//@desc Get a student
//@route GET /user/student/
//@access private
const getStudent = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404).json("User not found");
    throw new Error("No user found");
  } else {
    const { name, rollNo, course, email, semester, phoneNo } = user;
    res.status(200).json({ name, rollNo, course, email, semester, phoneNo });
  }
});

//@desc Update a student
//@route PUT /user/student
//@access private
const updateStudent = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404).json("User not found");
    throw new Error("User not found");
  } else {
    // const { name, rollNo, course, semester, email, phoneNo } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {$set: req.body}, {
      new: true,
    });
    res.status(200).json("User details updated successfully");
  }
});

module.exports = { registerStudent, loginStudent, getStudent, updateStudent };
