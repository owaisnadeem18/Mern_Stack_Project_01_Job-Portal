import { applicationModel } from "../models/Application.model.js";
import { JobModel } from "../models/job.model.js";


export const applyJob = async (req , res) => {

  try {
    
    const userId = req.id
    const jobId = req.params.id

    // check job id

    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required",
        success: false
      })
    }

    // Find either the user already applied for the job:

    let alreadyApplied = await applicationModel.findOne({job: jobId , applicant: userId})

    if (alreadyApplied) {
      return res.status(200).json({
        message: "You have already applied for the job",
        success: false
      })
    }
    
    // Check if the job exists 

    let CheckJob = await JobModel.findById(jobId)

    if (!CheckJob) {
      return res.status(404).json({
        message: "Job does not exist",
        success: false
      })
    }

    // Create a new application , user can apply now :
    
    const newApplication = await applicationModel.create({
      job: jobId ,
      applicant: userId
    })

    CheckJob.applications.push(newApplication._id)
    await CheckJob.save()

    return res.status(200).json({
      message: "Application applied successfully",
      success: true
    })

  }

  catch (error) {
    console.log(error)
  }
}