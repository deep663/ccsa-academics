const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  // console.log(req.cookies);
  const token = req.cookies._auth || req.headers["authorization"];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json("User is not authorized");
      throw new Error("User is not authorized");
    } else {
      req.user = decoded.user;
      next();
      // res.status(200).json({message: "User is authorized"});
    }
  });
  if (!token) {
    res.status(401).json("Token not found");
    throw new Error("Token not found");
  }
});

module.exports = validateToken;
