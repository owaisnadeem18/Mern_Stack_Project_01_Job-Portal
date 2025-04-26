import express from "express"
import { Login, logOut, Register, UpdatingProfile } from "../controllers/user.controller"

const router = express.Router()

router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").post(logOut)
router.route("/profile/update").post(UpdatingProfile)