import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import datauri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const Register = async (req, res) => {
  try {

    const { fullName, email, password, phoneNumber, role } = req.body;

    if (!fullName || !email || !password || !phoneNumber || !role) {
      return res.status(400).json({
        message: "Something is missing...",
        success: false,
      });
    }

    const file = req.file
    const fileUri = datauri(file)
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content)

    const emailVerify = await User.findOne({ email });

    if (emailVerify) {
      return res.status(400).json({
        message: "User Already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      role,
      profile: {
        ProfilePhoto : cloudResponse.secure_url
      }
    });

    res.status(201).json({
      message: "Account Created Successfully" , 
      success: true
    })

  } catch (error) {
    console.log("The error is => " , error)
    }
};

// Login API 

export const Login = async (req , res) => {
    try {

      const { email , password , role } = req.body
 

      
        if(!email || !password || !role) {
            return res.status(400).json({
                message: "User information is missing",
                success: false
            })
        } 

        let LoginUser = await User.findOne({email})

        console.log(LoginUser)

        if (!LoginUser) {
            return res.status(400).json({
                message: "User Email is incorrect" , 
                success: false
            })
        }

        const passwordMatch = await bcrypt.compare(password , LoginUser.password)

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

        const tokenData = {
            userId: LoginUser._id 
        }

        LoginUser = {
          _id : LoginUser._id , 
          fullName : LoginUser.fullName ,
          email : LoginUser.email ,
          password : LoginUser.password ,
          phoneNumber : LoginUser.phoneNumber ,
          profile : LoginUser.profile
        }

        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" })

        return res.status(200).cookie("token" , token , {maxAge : 1 * 48 * 60 * 60 * 1000 , httpsOnly: true , sameSite: "strict"}).json({
          message: `Welcome Back ${LoginUser.fullName}` , 
          LoginUser,
          success: true,
        })

    }

    catch(err) {
        console.log("the login error is => " , err)
    }
} 

// LogOut API 

export const logOut = async (req , res) => {
    return res.status(200).cookie("token" , "" , {maxAge: 0}).json({
      message: "Logged Out Successfully...",
      success: true
    })
} 

// Updating Profile 

export const UpdatingProfile = async (req , res) => {

  try {
    
    const {fullName , email , password ,  phoneNumber , skills , bio} = req.body 
    // Here, we have to add the data of cloudinary: 

    const file = req.file
    console.log("file is => " , file)


    const fileUri = datauri(file)
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content)

    console.log("Cloud response is => " , cloudResponse)

    let skillsArray; 

    if (skills) {
      skillsArray = skills.split(",")
    }

    const userId = req.id // middleware authentication (point to be remember -> It's quite difficult)
    let LoginUser = await User.findById(userId) // Then, I used this specific I'd in order to find the user.

    if (!LoginUser) {
      return res.status(400).json({
        message: "User is not found" , 
        success: false
      })
    }

    // Updating the data:
    
    if (fullName) LoginUser.fullName = fullName
    if (email) LoginUser.email = email    
    if (password) LoginUser.password = password 
    if (skills) LoginUser.profile.skills = skillsArray  
    if (bio) LoginUser.profile.bio = bio
    if (phoneNumber) LoginUser.phoneNumber = phoneNumber

    if (cloudResponse) {
      LoginUser.profile.resume = cloudResponse.secure_url
      LoginUser.profile.resumeOriginalName = file.originalname
    }
    
    await LoginUser.save();

    // Now Updating the data in the data base: 

    LoginUser = {
      _id : LoginUser._id , 
      fullName : LoginUser.fullName ,
      email : LoginUser.email ,
      password : LoginUser.password ,
      phoneNumber : LoginUser.phoneNumber ,
      profile : LoginUser.profile
    }
  
    return res.status(200).json({
      message: "User Updated Successfully" ,
      LoginUser,
      success: true
    })

  } 

  catch (err) {
    console.log(`Error updating the profile is => ${err}`)
  }

}

