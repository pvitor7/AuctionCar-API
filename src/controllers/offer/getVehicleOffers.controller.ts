import { Request, Response } from "express";
import getVehicleOfferService from "../../services/offer/getOffers.service";

const getOfferController = async (req: Request, res: Response) => {
    const { vehicleId } = req.params;
    const  offersVehicle = await getVehicleOfferService(vehicleId);
    return res.json(offersVehicle)
}

export default getOfferController;