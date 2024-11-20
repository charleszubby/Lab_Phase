import React from "react";
import OtpForm from "@/components/auth/otpForm";
const VerifyEmail = () => {
  return (
    <div className=" w-5/12 text-center ">
      <div className="w-full flex text-center">
        <h1 className="font-[600] text-[30px] w-full">
          Verify Your OTP Thanks!
        </h1>
      </div>
      <div className="h-full flex items-center justify-center">
        <OtpForm />
      </div>
    </div>
  );
};

export default VerifyEmail;
