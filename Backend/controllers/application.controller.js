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

// Now see that how many of the candidates have applied for the job: 

export const GetAppliedJobs = async (req , res) => {
  try {
    const userId = req.id
    const findApplicants = await applicationModel.find({applicant: userId}).sort({createdAt: -1}).populate({
      path: "job",
      options: {sort: {createdAt:-1}},
      populate: {
        path: "company",
        options: {sort: {createdAt: -1}}
      }
    })

    if (!findApplicants) {
      return res.status(404).json({
        message: "Application is not found" , 
        success: false
      })
    }

    return res.status(200).json({
      findApplicants,
      success: true
    })

  }

  catch(err) {
    console.log(err)
  }

}

// This API is only for admin , so that admin could see that how many people applied for job:

export const getApplicants = async (req , res) => {

  try {
    const jobId = req.params.id 
    const FindJobId = await JobModel.findById(jobId).populate({
      path: "applications" , 
      options: {sortAt : {createdAt: -1}},
      populate: {
        path: "applicant" 
      }
    }) 
    
    if (!FindJobId) {
      return res.status(404).json({
        message: "No Applied jobs found"
      })
    }

    return res.status(200).json({
      FindJobId,
      success: true
    })

  }

  catch (err) {
    console.log(err)
  }

}

export const updateStatus = async (req , res) => {
  
  try {
    const {status} = req.body 
    const applicationId = req.params.id
    
    if (!status) {
      return res.status(400).json({
        message: "Status is not available",
        success: false
      })
    }

    // Now update the status of applicant using application id 
    
    const FindApplicant = await applicationModel.findOne({_id: applicationId})

    if (!FindApplicant) {
      return res.status(400).json({
        message: "No Applicant found",
        success: true
      })
    }

    FindApplicant.status = status.toLowerCase()
    await FindApplicant.save()

    return res.status(200).json({
      message : "status updated successfully" ,
      success: true
    })

  }

  catch(err) {
    console.log(err)
  }

}