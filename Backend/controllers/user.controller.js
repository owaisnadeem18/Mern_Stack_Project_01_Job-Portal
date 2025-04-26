import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

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

    res.status(201).json({
      message: "User Successfully Registered" , 
      success: true
    })

  } catch (error) {
    console.log("The error is => " , error)
    }
};

// Login API 

export const Login = async (req , res) => {
    try {
        const { Email , password , role } = req.body
        if(!Email || !password || !role) {
            return res.status(400).json({
                message: "User information is missing",
                success: false
            })
        } 

        let LoginUser = await User.findOne({Email})

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
          FullName : LoginUser.FullName ,
          Email : LoginUser.Email ,
          password : LoginUser.password ,
          phoneNumber : LoginUser.phoneNumber ,
          profile : LoginUser.profile
        }

        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" })

        return res.status(200).cookie("token" , token , {maxAge : 1* 24 * 60 * 60 * 1000 , httpsOnly: true , sameSite: "strict"}).json({
          message: `Welcome Back ${User.FullName}` , 
          success: true
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
    
    const {FullName , Email , password , skills , bio} = req.body 
    
    if (!FullName || !Email || !password || !skills || !bio ) {
      return res.status(400).json({
        message: "Something is missing" , 
        success: false
      })    
    }


    // Here, we have to add the data of cloudinary: 

    // -------------------------------



    // -------------------------------

    const skillsArray = skills.split(",")
    const userId = req.id // middleware authentication (point to be remember -> It's quite difficult)
    const FindUser = await User.findById(userId) // Then, I used this specific I'd in order to find the user.

    if (!FindUser) {
      return res.status(400).json({
        message: "404 User is not found" , 
        success: false
      })
    }

    // Updating the data:
    
    FindUser.FullName = FullName ,
    FindUser.Email = Email   ,
    FindUser.password = password ,
    FindUser.skills = skillsArray ,
    FindUser.bio =  bio
    
    await FindUser.save();

    // Now Updating the data in the data base: 

    FindUser = {
      _id : FindUser._id , 
      FullName : FindUser.FullName ,
      Email : FindUser.Email ,
      password : FindUser.password ,
      skills : FindUser.skills ,
      bio : FindUser.bio
    }
  
    return res.status(200).json({
      message: "User Updated Successfully" ,
      FindUser , 
      success: true
    })

  } 


  catch (err) {
    console.log(`Error updating the profile is => ${err}`)
  }

}

