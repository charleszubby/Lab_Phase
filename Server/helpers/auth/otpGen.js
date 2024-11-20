import { userOtp } from "../../models/user/auth/otp.model.js";

const otpGeneration = async (userID, otpType) => {
  try {
    await userOtp.deleteMany({ user: userID, otpType: otpType });
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await userOtp.create({
      user: userID,
      otp: otp,
      otpType: otpType,
    });
    return otp;
  } catch (error) {
    throw new Error("Error Generating OTP and saving OTP to database");
  }
};

export { otpGeneration };
