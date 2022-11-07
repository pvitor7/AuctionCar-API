import { Request, Response } from "express"
import deleteVehicleService from "../../services/motor/deleteMotor.service"

const deleteVehicleController = async (req: Request, res: Response) => {

    const id = req.params.id

    await deleteVehicleService(id)

    return res.status(204).json({message: "Data Deleted"})
  
}

export default deleteVehicleController