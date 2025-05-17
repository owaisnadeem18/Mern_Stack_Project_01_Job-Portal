import { applicationModel } from "../models/Application.model"
import { JobModel } from "../models/job.model"

const applyJob = async (req , res) => {
    try{
        let userId = req.userId
        let jobId = req.params.id 
        
    // If there is no job Id:
    if (!jobId) {
        return res.status(404).json({
            message: "Job Id is not found...",
            success: false
        })
    }

    // If the use already applied:
    let ApplicationApplied = await applicationModel.find({job: jobId , applicant: userId})

    if (ApplicationApplied) {
        return res.status(200).json({
            message: "User Already Applied for this job",
            success: false
        })
    }

    // If job does not exist:

    let job = await JobModel.findById(jobId)
    if (!job) {
        return res.status(404).json({
            message: "Job does not exist",
            success: false
        })
    }

    // After all above validation , now user can apply for the job:

    const createApplication = await JobModel.create({
        jobId,
        userId
    })

    job.applications.push(createApplication._id)

    await job.save()

    return res.status(201).json({
        message: "Job Applied Successfully! ",
        success: true
    })

}

catch(err) {
    console.log(err)
}


} 