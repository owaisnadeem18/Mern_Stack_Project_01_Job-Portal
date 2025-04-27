import { CompanyModel } from "../models/company.model";

// Register Company:

export const RegisterCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({
        message: "Company Name is required.",
        success: false,
      });
    }

    let company = await CompanyModel.findOne({ name: companyName });

    if (company) {
      return res.status(400).json({
        message: "You can't register with same company name",
        success: false,
      });
    }

    company = await CompanyModel.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(200).json({
      message: "Company created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get All the Companies:

export const getCompanies = async (req, res) => {
  try {
    const userId = req.id;
    let companies = await CompanyModel.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "Company not found...",
        success: false,
      });
    }
  } catch (err) {
    console.log(`Get company error is -> ${err}`);
  }
};

// Get that specific company by the I'd:

export const GetCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await CompanyModel.findById({ companyId });
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

// Update Company:

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    const updateData = { name, description, website, location };

    const company = await CompanyModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company Information Updated ",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};
