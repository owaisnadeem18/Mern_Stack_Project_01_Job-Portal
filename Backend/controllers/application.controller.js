import { applicationModel } from "../models/Application.model.js";
import { JobModel } from "../models/job.model.js";

// // Apply on Job (For User):

// export const applyJob = async (req, res) => {
//   try {
//     let userId = req.userId;
//     let jobId = req.params.id;

//     // If there is no job Id:
//     if (!jobId) {
//       return res.status(404).json({
//         message: "Job Id is not found...",
//         success: false,
//       });
//     }

//     // If the use already applied:
//     let ApplicationApplied = await applicationModel.findOne({
//       job: jobId,
//       applicant: userId,
//     });

//     if (ApplicationApplied) {
//       return res.status(200).json({
//         message: "User Already Applied for this job",
//         success: false,
//       });
//     }

//     // If job does not exist:

//     let job = await JobModel.findById(jobId);
//     if (!job) {
//       return res.status(404).json({
//         message: "Job does not exist",
//         success: false,
//       });
//     }

//     // After all above validation , now user can apply for the job:

//     const createApplication = await applicationModel.create({
//       job : jobId,
//       applicant : userId
//     });

//     job.applications.push(createApplication._id);

//     await job.save();

//     return res.status(201).json({
//       message: "Job Applied Successfully! ",
//       success: true,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// // Get All jobs, that user applied:

// export const GetAppliedJobs = async (req, res) => {
//   try {
//     const userId = req.id;

//     // Get the all Jobs on which user has previously applied:
//     const get_applied_jobs = await applicationModel
//       .findById(userId)
//       .sort({ createdAt: -1 })
//       .populate({
//         path: "job",
//         options: { sort: { createdAt: -1 } },
//         populate: {
//           path: "company",
//           options: { sort: { createdAt: -1 } },
//         },
//       });

//     // If there are no applications present:
//     return res.status(404).json({
//       message: "No Jobs Previously Applied! ",
//     });

//     // Get all the applications , user applied previously
//     return res.status(200).json({
//       get_applied_jobs,
//       success: true,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// // Now we want to let admin see that how many of the applicants applied on any specific job application:

// export const getApplications = async (req, res) => {
//   try {
//     const JobId = req.params.id;

//     const JobApplications = await JobModel.findById(JobId).populate({
//       path: "applications",
//       options: { sort: { createdAt: -1 } },
//       populate: {
//         options: { sort: { createdAt: -1 } },
//       },
//     });

//     if (!JobApplications) {
//       return res.status(404).json({
//         message: "No Job Application is Present",
//         success: false,
//       });
//     }

//     return res.status(200).json({
//       JobApplications,
//       success: true,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// // To Update the status of the user:
// export const updateStatus = async (req, res) => {
//   try {
//     const status = req.id;
//     const applicantId = req.params.id;

//     if (!status) {
//       return res.status(404).json({
//         message: "Job Status is not found",
//         success: false,
//       });
//     }

//     const UpdateStatus = await applicationModel.find({ _id: applicantId });

//     // Now , here we have to update the status
//     updateStatus.status = status.toLowerCase();
//     await updateStatus.save();

//     return res.status(200).json({
//       message: "Updated Status Successfully",
//       success: true,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };




// --------------------- Rewriting the code to understand it 

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