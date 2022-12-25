import { Request, Response} from "express"
import createVehicleService from "../../services/vehicle/createVehicle.service"

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
        img,
        categorie
    } = req.body

    const newVehicle = await createVehicleService(id,{
        heading,
        status,
        year,
        km,
        price,
        description,
        published,
        img, 
        categorie
    })

    return res.status(201).json(newVehicle)
}

export default createVehicleController