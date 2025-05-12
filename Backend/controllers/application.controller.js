import { applicationModel } from "../models/Application.model.js"
import { JobModel } from "../models/job.model"


export const applyJob = async (req , res) => {
    try{

        const userId = req.id 
        const JobId = req.params.id 

        if (!JobId) {
            res.status(400).json({
                message: "Job Id is required.",
                success: false
            })
        }

        // If the user already applied on the job:

        const isApplied = await applicationModel.findOne({job:JobId , applicant: userId})
        
        if (isApplied) {
            return res.status(400).json({
                message: "Already Applied on this job.",
                success: false
            })
        }

        // If the job exists , now we have to check this condition:

        const isJobExisted = await JobModel.findById(JobId)

        if (!isJobExisted) {
            return res.status(400).json({
                message: "Job does not exist",
                success: false 
            })
        }

        // Here , after all the validations , now user can apply on any of the specific job: 
        
        const newApplication = await applicationModel.create({
            job: JobId,
            applicant: userId
        })

        isJobExisted.applications.push(newApplication._id)
        await isJobExisted.save()

        return res.status(201).json({
            message: "Job Applied Successfully !",
            success: true
        })

    }


    catch(err){
    
        console.log(err)
    
    }
}

export const getAppliedJobs = async (req , res) => {

    try {

        const userId = req.id 

        const PreviousApplications = await applicationModel.find({ applicant: userId }).sort({createdAt:-1}).populate({
            path: "job",
            options: {sort:{createdAt:-1}}
            
        })

        if (!PreviousApplications) {
            return res.status(404).json({
                message: "No Applications found",
                success: false
            })
        }

        return res.status(200).json({
            PreviousApplications,
            success: true
         })

    }

    catch(err) {
        console.log(err)
    }

}

