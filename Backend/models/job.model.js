import mongoose from "mongoose";

const jobModel = new mongoose.Schema({
    title : { type: String, required: true},
    description : String ,
    company : { type: mongoose.Schema.Types.ObjectId , ref : "Company" , required: true},
    location : { type: String, required: true},
    salary : { type: Number, required: true},
    requirements : [{
        type: String
    }] ,
    position: String,
    experience : {type: String , required: true},
    jobType : {type: String , required: true},
    created_by : { type: mongoose.Schema.Types.ObjectId , ref: "User" , required: true},
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Application",
        }
    ]
} , {timestamps: true} )

export const JobModel = mongoose.model("Job" , jobModel)