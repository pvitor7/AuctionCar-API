import { Router } from "express"
import createVehicleController from "../controllers/motor/createMotor.controller"
import deleteVehicleController from "../controllers/motor/deleteMotor.controller"
import listVehicleController from "../controllers/motor/ListMotors.controller"
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware"

const motor = Router()

motor.post("", AuthMiddleware, createVehicleController)

motor.get("", listVehicleController)

motor.delete("/:id", deleteVehicleController)

export default motor