import express from "express"
import { adminJobs, GetAllJobs, getJobById, JobPost, updateAdminJob } from "../controllers/job.controller.js"
import isAuthenticated from "../middlewares/isAuthorized.js"

const jobRouter = express()

jobRouter.route("/jobPost").post( isAuthenticated , JobPost)
jobRouter.route("/getJobs").get(isAuthenticated ,GetAllJobs)
jobRouter.route("/getJobs/:id").get(isAuthenticated , getJobById)
jobRouter.route("/adminJobs").get(isAuthenticated , adminJobs)
jobRouter.route("/updateJob/:id").put(isAuthenticated , updateAdminJob)

export default jobRouter