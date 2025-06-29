const { Schema } = require("mongoose");
mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true, // Ensures no two users have the same userId
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = {UserSchema};
