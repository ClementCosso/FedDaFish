const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      match: /^.+@.+\..+$/,
      required: true,
      unique: true
    },
    password: { type: String, required: true },
    image: { type: String, default: "images/pangong-tso.png" },
    quote: { type: String, required: true },
    admin: Boolean
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
