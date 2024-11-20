import user from "../../models/user/auth/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../../helpers/auth/token.verification.js";
import { sendOTP } from "../../helpers/auth/nodemailer.js";

const createUser = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, dateOfBirth, gender } =
      req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and Confirm Password does not match" });
    }

    const emailExist = await user.findOne({ email: email });
    if (emailExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await user.create({
      fullName,
      email,
      password: hashedPassword,
      dateOfBirth,
      gender,
    });

    if (newUser) {
      await sendOTP(newUser);
      const token = generateVerificationToken(newUser._id);
      res.status(200).json({ message: `Verification Token sent: ${token}` });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const verifyUser = async (req, res) => {};

const loginUser = async (req, res) => {};

const logOutUser = async (req, res) => {};

const authMiddlWare = async (req, res) => {};

export { createUser, verifyUser, loginUser };
