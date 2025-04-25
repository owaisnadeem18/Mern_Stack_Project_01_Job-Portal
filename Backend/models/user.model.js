import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required:true
    },
    role:{
        type:String,
        enum: ["recruiter" , "student"]
    },
    profile: {
        bio: {type: String},
        skills: {type: String},
        resume: {type: String},
        resumeOriginalName: {type: String},
        company: {type:mongoose.Schema.Types.ObjectId , ref : "Company"},
        ProfilePhoto: {
            type: String,
            default: ""
        } 
    }
} , {timestamps:true})

// creating a user model and exporting it 

export const User = mongoose.model("User" , UserSchema)