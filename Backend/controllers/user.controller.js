import { User } from "../models/user.model";
import bcrypt from "bcryptjs";

export const Register = async (req, res) => {
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
  } catch (error) {
    console.log("The error is => " , error)
    }
};

export const Login = async (req , res) => {
    try {
        const { Email , password , role } = req.body
        if(!Email || !password || !role) {
            return res.status(400).json({
                message: "User information is missing",
                success: false
            })
        } 

        const LoginUser = User.findOne({Email})

        if (LoginUser.Email !== Email) {
            return res.status(400).json({
                message: "User Email is incorrect" , 
                success: false
            })
        }

        const passwordMatch = bcrypt.compare(password , LoginUser.password)

        if (!passwordMatch) {
            return res.status(400).json({
                message: "Incorrect Password",
                success: false
            }) 
        }



        if ( LoginUser.role !== role ) {
            return res.status(400).json({
                message: "You are logging in with incorrect role...",
                success: false
            }) 
        }

    }
    catch(err) {
        console.log("the login error is => " , err)
    }
} 

