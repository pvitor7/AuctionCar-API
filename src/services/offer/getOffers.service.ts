import OffersRepository from "../../repositories/offer.repository";
// import VehicleRepository from "../../repositories/vehicle.repository";

const getVehicleOfferService = async (vehicleId: string) => {
  // const vehicle = await VehicleRepository.findOne(vehicleId);
  // console.log(vehicle)

  const offers = await OffersRepository.find();

  return offers;
};

export default getVehicleOfferService;
