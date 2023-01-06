import { Request, Response } from "express"
import deleteVehicleService from "../../services/vehicle/deleteVehicle.service"

const deleteVehicleController = async (req: Request, res: Response) => {

    const id = req.params.idVehicle
    
    await deleteVehicleService(id)

    return res.status(204).json({message: "Data Deleted"})
  
}

export default deleteVehicleController