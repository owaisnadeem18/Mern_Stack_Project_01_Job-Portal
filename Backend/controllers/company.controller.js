import { CompanyModel } from "../models/company.model"

export const RegisterCompany = async (req , res) => {
    
    const { companyName } = req.body

    if (!companyName) {
        return res.status(400).json({
            message: "Company Name is required.",
            success: false
        })
    }

    let company = CompanyModel.findOne({name: companyName})

    if (company) {
        return res.status(400).json({
            message: "You can't register with same company name" ,
            success: false
        })
    }

    company = CompanyModel.create({
        name: companyName,
        userId : req.id
    })

    return res.status(200).json({
        message: "Company created successfully" ,
        success: true
    })

}

