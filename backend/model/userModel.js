const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please Enter Name"],
    },
    password: {
      type: String,
      required: [true, "please Enter password"],
    },
    email: {
      type: String,
      required: [true, "please Enter email"],
      unique: true,
    },
   
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);