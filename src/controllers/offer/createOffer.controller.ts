import { Request, Response } from "express";
import createOfferService from "../../services/offer/createOffer.service";

const createOfferController = async (req: Request, res: Response) => {
    const userId = req.user.id;
    const { offer } = req.body;
    const { vehicleId } = req.params;

    const  newOffer = await createOfferService(offer, vehicleId, userId);

    return res.status(201).json(newOffer)
}

export default createOfferController;