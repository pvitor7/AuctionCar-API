import OffersRepository from "../../repositories/offer.repository";

const getVehicleOfferService = async (vehicleId: string) => {
  
  const offers = await OffersRepository.find();
  return offers;
};

export default getVehicleOfferService;
