const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique : [true,"this email is already taken"]
    },
    password: {
      type: String,
      required: [true, "Please enter the password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
