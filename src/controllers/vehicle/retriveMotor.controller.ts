import {Request, Response } from "express"
import retriveVehicleService from "../../services/vehicle/retriveVehicle.service"

const retriveVehicleController = async (req: Request, res: Response) => {

    const { idVehicle } = req.params

    const vehicle = await retriveVehicleService(idVehicle)

    return res.status(200).json(vehicle)
}

export default retriveVehicleController