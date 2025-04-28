import { JobModel } from "../models/job.model"

export const JobPost = async (req , res) => {
    try {
        const {title , description , requirements , location , salary , jobType ,  experience , position , companyId } = req.body
        const userId = req.id
        
        if (!title || !description ||  !requirements ||  !location ||  !salary ||  !jobType ||  !companyId || !position || !experience ) {
        return res.status(400).json({
            message: "Something is missing...",
            success: false 
        })
    }
    

    let job = await JobModel.create({
        title ,
        description , 
        requirements: requirements.split(",") ,
        location , 
        salary: Number(salary),
        jobType,
        created_by: userId,
        company: companyId ,
        experience: experience
    })

    return res.status(201).json({
        message: "Job Has been created successfully" ,
        job,
        success: true
    })
} 
catch (error) {
    console.log(error)
}

}

const GetAllJobs = async (req , res) => {
    const keyword = req.query.keyword || "" ; 
    const query = {
        $or : [
            {title: {$regex: keyword , $options: }}
        ]
    }
}