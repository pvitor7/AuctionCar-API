import { Router } from "express"
import userLoginController from "../controllers/login"

const login = Router()

login.post("", userLoginController)

export default login