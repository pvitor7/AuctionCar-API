import { Request, Response} from "express"
import createVehicleService from "../../services/vehicle/createVehicle.service"
import { IVehicleRequestCreate } from "../../interfaces/motor.interface"

const createVehicleController = async (req: Request, res: Response) => {
    const id = req.user.id
    const {
        heading,
        status,
        year,
        km,
        price,
        description,
        published,
        auction,
        img,
        gallery,
        categorie,
        dateAuction
    } = req.body

    const newVehicle = await createVehicleService(id, {
        heading,
        status,
        year,
        km,
        price,
        description,
        published,
        auction,
        img, 
        gallery,        
        categorie,
        dateAuction
    })

    return res.status(201).json(newVehicle)
}

export default createVehicleController