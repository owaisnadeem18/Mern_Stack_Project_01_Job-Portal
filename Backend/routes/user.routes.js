import express from "express"
import { Login, logOut, Register, UpdatingProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthorized.js"


const router = express.Router()

router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").get(logOut)
router.route("/profile/update").post(isAuthenticated , UpdatingProfile)

export default router