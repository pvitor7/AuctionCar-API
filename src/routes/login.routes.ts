import { Router } from "express"
import userLoginController from "../controllers/user/loginUser.controller"

const login = Router()

login.post("", userLoginController)

export default login