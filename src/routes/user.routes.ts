import { Router } from "express"
import createUserController from "../controllers/user/createUser.controller";

const user = Router();

user.post("/register", createUserController)

export default user