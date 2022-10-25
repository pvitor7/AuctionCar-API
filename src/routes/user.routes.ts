import { Router } from "express"
import createUserController from "../controllers/user/createUser.controller";
import listUserController from "../controllers/user/listUsers.controller";
import retriveUserController from "../controllers/user/retriveUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";

const user = Router();

user.post("/register", createUserController)

user.get("/:id", retriveUserController)

user.get("", listUserController)

user.patch("/:id", updateUserController)

export default user