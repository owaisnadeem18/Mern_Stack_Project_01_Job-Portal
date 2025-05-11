import { JobModel } from "../models/job.model.js";

// For Admin to create job posts :
export const JobPost = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      location,
      salary,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !location ||
      !salary ||
      !jobType ||
      !companyId ||
      !position ||
      !experience
    ) {
      return res.status(400).json({
        message: "Something is missing...",
        success: false,
      });
    }

    let job = await JobModel.create({
      title,
      description,
      requirements: requirements.split(","),
      location,
      salary: Number(salary),
      jobType,
      position,
      created_by: userId,
      company: companyId,
      experience: experience,
    });

    return res.status(201).json({
      message: "Job Has been created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get All Jobs API (for user/student)
export const GetAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await JobModel.find(query);

    if (!jobs) {
      return res.status(400).json({
        message: "Job is not found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};


// Get Job By Id (for user/student)
export const getJobById = async (req , res) => {
  try {
    
    const jobId = req.params.id;

    const jobbyId = await JobModel.find(jobId)

    if (!jobbyId) {
      return res.status(400).json({
        message: "Job is not found",
        success: false,
      })
    }

    return res.status(200).json({
      jobbyId , 
      success:true
    })

  } catch (error) {
    console.log(`The error was ---> ${error}`);
  }
};

// Admin to view the job posts created by him/her (How many jobs admin has created)
export const adminJobs = async ( req , res ) => {
  try {
    
    const adminId = req.id 

    const adminJobId = JobModel.find({created_by: adminId})

    if (!adminJobId) {
      return res.status(400).json({
        message: "job not found" , 
        success: false
      })
    }

    return res.status(200).json({
      adminJobId,
      success:true
    })

  } catch (error) {
    
    console.log(error)
  
  }
}