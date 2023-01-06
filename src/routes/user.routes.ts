import { Router } from "express"
import createUserController from "../controllers/user/createUser.controller";
import softDeleteController from "../controllers/user/deleteUser.controller";
import listUserController from "../controllers/user/listUsers.controller";
import retriveUserController from "../controllers/user/retriveUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware";
import schemaValidation from "../middlewares/schemaValidation.middleware";
import { registerSchema } from "../schemas/users.schema";

const user = Router();

user.post("/register", schemaValidation(registerSchema), createUserController)

user.get("/vehicles", AuthMiddleware,retriveUserController)

user.get("", listUserController)

user.patch("", AuthMiddleware, updateUserController)

user.delete("", AuthMiddleware, softDeleteController)

export default user