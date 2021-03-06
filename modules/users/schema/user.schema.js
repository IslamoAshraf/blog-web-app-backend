const { Schema } = require("mongoose");
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    location: { type: String, required: true },
    role: { type: String, default: "user" },
    deactivated: { type: Boolean, default: false },
    blocked: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
