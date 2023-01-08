import Category from "../../entities/Category";
import { AppError } from "../../erros/AppError";
import VehicleRepository from "../../repositories/vehicle.repository";
import CategoryRepository from "../../repositories/category.repository";

const updateVehicleService = async (
  userId: string,
  id: string,
  heading?: string,
  status?: boolean,
  year?: string,
  km?: string,
  price?: string,
  description?: string,
  published?: boolean,
  auction?: boolean,
  img?: string,
  categorie?: string,
  dateAuction?: Date
) => {

  const vehicleExists = await VehicleRepository.findOne(id);
  if (!vehicleExists[0]) {
    throw new AppError("Veículo foi encontrado!", 404);
  }

  if (userId != vehicleExists[0].userId) {
    throw new AppError("Usuário não autorizado!", 403);
  }

  if (categorie) {
    let category = await CategoryRepository.findOneBy({categorie}) ;

    if (!category) {
      const newCategory = new Category();
      newCategory.categorie = categorie;
      category = await CategoryRepository.create(newCategory);
    }

    await VehicleRepository.update(vehicleExists[0].id, {
      category: category.categorie,
      categorie: category
    });
  }

  const idVehicle = vehicleExists[0].id;

  if (heading) {
    await VehicleRepository.update(idVehicle, { heading: heading });
  }
  if (status) {
    await VehicleRepository.update(idVehicle, { status: status });
  }
  if (year) {
    await VehicleRepository.update(idVehicle, { year: year });
  }
  if (km) {
    await VehicleRepository.update(idVehicle, { km: km });
  }
  if (price) {
    await VehicleRepository.update(idVehicle, { price: price });
  }
  if (description) {
    await VehicleRepository.update(idVehicle, { description: description });
  }
  if (published) {
    await VehicleRepository.update(idVehicle, { published: published });
  }
  if (auction) {
    await VehicleRepository.update(idVehicle, { auction: heading });
  }
  if (img) {
    await VehicleRepository.update(idVehicle, { img: img });
  }
  if (dateAuction) {
    await VehicleRepository.update(idVehicle, { dateAuction: dateAuction });
  }

  return await VehicleRepository.findOne(id);
};

export default updateVehicleService;
