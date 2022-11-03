import { Router } from "express"
import createVehicleController from "../controllers/motor/createMotor.controller"
import listVehicleController from "../controllers/motor/ListMotors.controller"

const motor = Router()

motor.post("", createVehicleController)

motor.get("", listVehicleController)

export default motor