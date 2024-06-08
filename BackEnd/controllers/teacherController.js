const asyncHandler = require("express-async-handler");
const User = require("../models/teacherModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a teacher
//@route POST /api/user/teacherResgister
//@access public
const registerTeacher = asyncHandler(async (req, res) => {
  const {Id, name, email, phoneNo, password } = req.body;
  if (!Id || !name || !email || !phoneNo || !password) {
    res.status(400).json("Please add all fields");
    throw new Error("Please add all fields");
  }
  const userAvailable = await User.findOne({
    $or: [{ Id }, { email }, { phoneNo }],
  });
  if (userAvailable) {
    let errorMessage = "User already registered with this ";
    if (userAvailable.email === email) {
      errorMessage += "email";
    } else if (userAvailable.phoneNo === phoneNo) {
      errorMessage += "phone number";
    } else if (userAvailable.Id === Id) {
      errorMessage += "ID";
    }
    res.status(400).json(errorMessage);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    Id,
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
          id: user._id,
          email: user.email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ accessToken });
    // console.log(accessToken);
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//@desc Get Teacher data
//@route GET /api/users/teacher
//@access private
const getTeacher = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404).json("User not found");
    throw new Error("User not found");
  } else {
    const { Id, name, email, phoneNo } = user;
    res.status(200).json({ Id, name, email, phoneNo });
  }
});


//@desc Update Teacher data
//@route PUT /api/users/teacher
//@access private
const updateTeacher = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404).json("User not found");
    throw new Error("User not found");
  } else {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {$set: req.body}, {
      new: true,
    });
    res.status(200).json("User details updated successfully");
  }
});

module.exports = { registerTeacher, loginTeacher, getTeacher, updateTeacher };
