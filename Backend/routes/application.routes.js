import express from "express"
import isAuthenticated from "../middlewares/isAuthorized.js"
import { applyJob , GetAppliedJobs , getApplications , updateStatus } from "../controllers/application.controller.js"

const router = express.Router()

router.route("/application").get(isAuthenticated, applyJob)
router.route("/getApplicants").get(isAuthenticated, GetAppliedJobs)
router.route("/:id/applicants").get(isAuthenticated, getApplications)
router.route("/status/:id/update").get(isAuthenticated, updateStatus)

export default router