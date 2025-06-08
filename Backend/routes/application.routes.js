import express from "express"
import isAuthenticated from "../middlewares/isAuthorized.js"
import { applyJob } from "../controllers/application.controller.js"

const ApplicationRouter = express.Router()

ApplicationRouter.route("/applyJob/:id").get(isAuthenticated, applyJob)
// ApplicationRouter.route("/getApplicants").get(isAuthenticated, GetAppliedJobs)
// ApplicationRouter.route("/status/:id/update").get(isAuthenticated, updateStatus)
// ApplicationRouter.route("/:id/applicants").get(isAuthenticated, getApplications)

export default ApplicationRouter