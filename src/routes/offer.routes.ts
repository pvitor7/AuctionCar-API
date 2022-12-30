import { Router } from "express"
import createOfferController from "../controllers/offer/createOffer.controller"
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware";
import getOfferController from "../controllers/offer/getVehicleOffers.controller";

const offer = Router();

offer.post("/:vehicleId", AuthMiddleware, createOfferController);
offer.get("/:vehicleId", getOfferController);

export default offer;