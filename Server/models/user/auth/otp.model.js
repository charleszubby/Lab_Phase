import { Types, Schema, model } from "mongoose";

const userOtpSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "Shopper",
    required: true,
  },

  otp: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  otpType: {
    type: String,
    enum: ["verify-user", "password-reset"],
  },
});

userOtpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });
const userOtp = model("userOtp", userOtpSchema);

export { userOtp };
