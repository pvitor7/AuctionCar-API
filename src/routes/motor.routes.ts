import { Router } from "express"
import createVehicleController from "../controllers/motor/createMotor.controller"
import listVehicleController from "../controllers/motor/ListMotors.controller"
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware"

const motor = Router()

motor.post("", AuthMiddleware, createVehicleController)

motor.get("", listVehicleController)

export default motor