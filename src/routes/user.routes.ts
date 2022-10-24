import { Router } from "express"
import createUserController from "../controllers/user/createUser.controller";
import retriveUserController from "../controllers/user/retriveUser.controller";

const user = Router();

user.post("/register", createUserController)

user.get("", retriveUserController)

export default user