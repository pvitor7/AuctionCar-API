import { Router } from "express"
import userLoginController from "../controllers/user/loginUser.controller"
import { loginSchema } from "../schemas/users.schema";
import schemaValidation from "../middlewares/schemaValidation.middleware";

const login = Router()

login.post("", schemaValidation(loginSchema), userLoginController)

export default login