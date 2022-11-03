import {Request, Response } from "express"
import retriveVehicleService from "../../services/motor/retirve.Motor.service"

const retriveVehicleController = async (req: Request, res: Response) => {

    const id = req.params.id

    const user = await retriveVehicleService(id)

    return res.status(200).json(user)
}

export default retriveVehicleController