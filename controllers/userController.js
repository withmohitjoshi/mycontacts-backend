const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/*
@desc Register a user
@route POST /api/user/register
@access public
*/
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandotatry BAD_REQUEST");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }
  // creating hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  }).catch((error) => {
    if (error) {
      res.status(403);
      throw new Error("Something went wrong user is not created");
    }
  });
  res.status(201).json({
    message: "user is registered",
    credentials: { _id: user.id, username: user.username, email: user.email },
  });
});
/*
@desc Login a user
@route POST /api/user/login
@access public
*/
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Either Email or Password are not provided");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const access_token = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "59m" }
    );
    res.status(200).json({ access_token });
  } else {
    res.status(401);
    throw new Error("Email or Password are not valid");
  }
});
/*
@desc Current user info
@route GET /api/user/current
@access private
*/
const currentUser = asyncHandler(async (req, res) => {
  if(!req.user){
    res.status(404)
    throw new Error("User not found")
  }
  res.status(200).json({ message: "successfully fetched the current user" , user:req.user});
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
