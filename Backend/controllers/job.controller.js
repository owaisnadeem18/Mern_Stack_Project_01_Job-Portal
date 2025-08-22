import { JobModel } from "../models/job.model.js";

// For Admin to create job posts :
export const JobPost = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      company,
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
      company,
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
        { title: { $regex: keyword, $options: "i" }},
        { description: { $regex: keyword, $options: "i" }},
      ],
    };

    const jobs = await JobModel.find(query).populate({
        path:"company"
    });

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

    const job = await JobModel.findById(jobId).populate({
      path: "applications",
    }).populate({
      path: "company"
    })

    if (!job) {
      return res.status(400).json({
        message: "Job is not found",
        success: false,
      })
    }

    return res.status(200).json({
      job,
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

    const adminJobId = await JobModel.find({created_by: adminId}).populate({
      path: "company" 
    })

    if (!adminJobId) {
      return res.status(400).json({
        message: "job not found" , 
        success: false
      })
    }

    return res.status(200).json({
      adminJobId,
      success:true,
      message: "Admin jobs get"
    })

  } catch (error) {
    
    console.log(error)
  
  }
}

// Update admin job by Id: 

export const updateAdminJob = async (req , res) => {

  console.log("req => " , req.body)

  try {

    const jobId = req.params.id 

    console.log(jobId)

    const adminId = req.id

    console.log(adminId)

    console.log(req.body)

    const {
      title, 
      location,
      salary,
      jobType,
      experience,
      position,
      company, 
      date
    } = req.body

    console.log("title", title)

    let adminJob = await JobModel.findOne({_id: jobId , created_by: adminId})

    if (!adminJob) {
      return res.status(404).json({
        message: "Job Not Found",
        success: false
      })
    }

    if (title) adminJob.title = title
    if (location) adminJob.location = location;
    if (salary) adminJob.salary = Number(salary);
    if (jobType) adminJob.jobType = jobType;
    if (experience) adminJob.experience = experience;
    if (position) adminJob.position = position;
    if (company) adminJob.company = company;
    if (date) adminJob.createdAt = date;

    await adminJob.save();

    return res.status(200).json({
      message: "Job Updated Successfully" ,
      adminJob , 
      success: true
    })

  }
  catch (err){
    console.log(err)
    return res.status(500).json({
      message: "Server error while updating job",
      success: false,
    }); 
  }
} 