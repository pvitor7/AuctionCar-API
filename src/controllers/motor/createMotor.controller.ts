import { Request, Response} from "express"
import createVehicleService from "../../services/motor/createMotor.service"

const createVehicleController = async (req: Request, res: Response) => {

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

    const newVehicle = await createVehicleService({
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