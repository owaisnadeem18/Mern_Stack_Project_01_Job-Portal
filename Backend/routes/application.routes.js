import express from "express"
import isAuthenticated from "../middlewares/isAuthorized.js"
import { applyJob , GetAppliedJobs , getApplications , updateStatus } from "../controllers/application.controller.js"

const ApplicationRouter = express.Router()

ApplicationRouter.route("/application").get(isAuthenticated, applyJob)
ApplicationRouter.route("/getApplicants").get(isAuthenticated, GetAppliedJobs)
ApplicationRouter.route("/:id/applicants").get(isAuthenticated, getApplications)
ApplicationRouter.route("/status/:id/update").get(isAuthenticated, updateStatus)

export default ApplicationRouter