import { AppError } from "../../erros/AppError";
import Offers from "../../entities/Offers";
import VehicleRepository from "../../repositories/vehicle.repository";
import OffersRepository from "../../repositories/offer.repository";
import User from "../../entities/User";
import AppDataSource from "../../data-source";

const createOfferService = async (
  offer: number,
  vehicleId: string,
  userId: string
): Promise<Offers> => {
  
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOne({where: {id: userId}
  })

  if(!user){
    throw new AppError("Usuário não identificado.", 400);
    
  }
  
  const vehicleExists = await VehicleRepository.findOne(vehicleId);
  
    if (!vehicleExists) {
      throw new AppError("Veículo não encontrado.", 400);
    }
        
    if(Number(vehicleExists[0].price) / 2 > offer){
      throw new AppError("O lance deve ser pelo menos R$100,00 maior que o anterior do anterior.", 400);   
    }

    vehicleExists[0].offers.map((element) => { 

      if(Number(element.offer) + 99 > offer){
        throw new AppError("O lance deve ser pelo menos R$ 100,00 maior do que o anterior", 400);   
      }
    });

    
    const newOffer = new Offers();
    newOffer.offer = offer;
    newOffer.vehicle = vehicleExists[0];
    newOffer.user = user;
    
    const offerUser = await OffersRepository.create(newOffer);
    

  return offerUser;
};

export default createOfferService;
