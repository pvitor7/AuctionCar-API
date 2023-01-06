import { AppError } from "../../erros/AppError";
import Offers from "../../entities/Offers";
import VehicleRepository from "../../repositories/vehicle.repository";
import OffersRepository from "../../repositories/offer.repository";
import UserRepository from "../../repositories/user.repository";

const createOfferService = async (
  offer: number,
  vehicleId: string,
  userId: string
): Promise<Offers> => {

  const user = await UserRepository.findById(userId);
  if (!user) {
    throw new AppError("Usuário não identificado.", 400);
  }

  const vehicleExists = await VehicleRepository.findOne(vehicleId);
  if (!vehicleExists) {
    throw new AppError("Veículo não encontrado.", 400);
  }

  if (Number(vehicleExists[0].price) / 2 > offer) {
    throw new AppError("O lance inicial mínimo é de metade do valor de compra do veículo.", 400);
  }

  vehicleExists[0].offers.map((element) => {
    if (Number(element.offer) + 99 > offer) {
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
