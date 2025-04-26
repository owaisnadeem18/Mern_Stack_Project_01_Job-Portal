import { User } from "../models/user.model";
import bcrypt from "bcryptjs";

const Register = async (req, res) => {
  try {
    const { FullName, Email, password, phoneNumber, role } = req.body;
    if (!FullName || !Email || !password || !phoneNumber || !role) {
      return res.status(400).json({
        message: "Something is missing...",
        success: false,
      });
    }

    const emailVerify = await User.findOne({ Email });

    if (emailVerify) {
      return res.status(400).json({
        message: "User Already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      FullName,
      Email,
      password: hashedPassword,
      phoneNumber,
      role,
    });
  } catch (error) {}
};
