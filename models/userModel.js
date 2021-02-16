const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A user must have an email"], //validater
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide a valid Email"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
