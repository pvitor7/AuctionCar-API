import { Router } from "express"
import createVehicleController from "../controllers/vehicle/createMotor.controller"
import deleteVehicleController from "../controllers/vehicle/deleteMotor.controller"
import listVehicleController from "../controllers/vehicle/ListMotors.controller"
import retriveVehicleController from "../controllers/vehicle/retriveMotor.controller"
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware"

const vehicle = Router()

vehicle.post("", AuthMiddleware, createVehicleController)

vehicle.get("", listVehicleController)

vehicle.get("/:idVehicle", retriveVehicleController)

vehicle.patch("/:idVehicle", AuthMiddleware, retriveVehicleController)

vehicle.delete("/:idVehicle", AuthMiddleware, deleteVehicleController)

export default vehicle