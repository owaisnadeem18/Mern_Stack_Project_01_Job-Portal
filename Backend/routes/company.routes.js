import express from "express"
import { getCompanies, GetCompanyById, RegisterCompany, updateCompany } from "../controllers/company.controller.js"
import isAuthenticated from "../middlewares/isAuthorized.js"

const CompanyRouter = express()

CompanyRouter.route("/registerCompany").post( isAuthenticated , RegisterCompany)
CompanyRouter.route("/getCompanies").get( isAuthenticated , getCompanies)
CompanyRouter.route("/getCompanies/:id").get( isAuthenticated , GetCompanyById)
CompanyRouter.route("/updateCompany/:id").put( isAuthenticated  , updateCompany)

export default CompanyRouter;