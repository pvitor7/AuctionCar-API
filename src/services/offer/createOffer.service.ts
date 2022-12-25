import { AppError } from "../../erros/AppError";
import Offers from "../../entities/Offers";
import VehicleRepository from "../../repositories/vehicle.repository";
import OffersRepository from "../../repositories/offer.repository";

const createOfferService = async (
  offer: number,
  vehicleId: any,
  userId: any
): Promise<Offers> => {
  
  
  const vehicleExists = await VehicleRepository.findOne(vehicleId);
  
  console.log(vehicleExists[0])
    if (!vehicleExists) {
      throw new AppError("Vehicle not found", 400);
    }
    
    
    
    vehicleExists[0].offers.map((element) => { 
      if(Number(element.offer) + 99 > offer){
        throw new AppError("O lance deve ser pelo menos R$ 100,00 maior do que o anterior", 400);   
      }
    });
    console.log(offer)
    console.log("passou")
    
    const newOffer = new Offers();
    newOffer.offer = offer;
    newOffer.vehicle = vehicleId;
    newOffer.user = userId;
    
    const offerUser = await OffersRepository.create(newOffer);
    

  return offerUser;
};

export default createOfferService;
