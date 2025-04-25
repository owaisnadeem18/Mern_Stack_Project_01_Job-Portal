import mongoose from "mongoose"

const CompanySchema = new mongoose.Schema({
    CompanyName : {
        type: String,
        required: true
    },
    description : {
        type: String
    },
    website: {
        type: String
    },
    location : {
        type: String
    },
    companyLogo : {
        type: String
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId , ref: "User" , required: true
    }
},{timestamps:true})

export const CompanyModel = mongoose.model("Company" , CompanySchema)