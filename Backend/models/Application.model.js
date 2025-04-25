import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job : {
        type: mongoose.Schema.Types.ObjectId , 
        ref: "Job",
        required: true
    },
    applicant : {
        type: mongoose.Schema.Types.ObjectId , 
        ref: "User",
        required: true
    },
    status : {
        type: mongoose.Schema.Types.ObjectId , 
        ref: "Job",
        required: true
    }
})

export const applicationModel = mongoose.model("Application" , applicationSchema)