import {Request, Response } from "express"
import retriveVehicleService from "../../services/vehicle/retriveVehicle.service"
import updateVehicleService from "../../services/vehicle/updateVehicle.service"

const retriveVehicleController = async (req: Request, res: Response) => {

    const { idVehicle } = req.params

    if(req.method == "GET"){
        const vehicle = await retriveVehicleService(idVehicle)
        return res.status(200).json(vehicle)
    }


    if(req.method == "PATCH"){
        const userId = req.user.id
        const   {
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
            dateAuction,
          } = req.body;

        const vehicleUpdate = await updateVehicleService(userId, idVehicle,   {
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
            dateAuction,
          })
        return res.status(200).json(vehicleUpdate)
    }
}

export default retriveVehicleController