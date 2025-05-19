import express from "express"
import isAuthenticated from "../middlewares/isAuthorized.js"
import { applyJob , GetAppliedJobs , getApplications , updateStatus } from "../controllers/application.controller.js"

const router = express.Router()

router.route("/application").post("") 