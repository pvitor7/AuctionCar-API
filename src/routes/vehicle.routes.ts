import { Router } from "express"
import createVehicleController from "../controllers/vehicle/createMotor.controller"
import deleteVehicleController from "../controllers/vehicle/deleteMotor.controller"
import listVehicleController from "../controllers/vehicle/ListMotors.controller"
import retriveVehicleController from "../controllers/vehicle/retriveMotor.controller"
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware"

const motor = Router()

motor.post("", AuthMiddleware, createVehicleController)

motor.get("", listVehicleController)

motor.get("/:idVehicle", retriveVehicleController)

motor.delete("/:id", AuthMiddleware, deleteVehicleController)

export default motor