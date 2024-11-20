import jwt from "jsonwebtoken";

const generateVerificationToken = (userId) => {
  const userPayload = { id: userId };
  const token = jwt.sign(userPayload, process.env.jwt_VERIFICATION_PASS, {
    expiresIn: "5m",
  });
};

export { generateVerificationToken };
