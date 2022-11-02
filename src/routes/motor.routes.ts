import { Router } from "express"
import createVehicleController from "../controllers/motor/createMotor.controller"

const motor = Router()

motor.post("", createVehicleController)

export default motor