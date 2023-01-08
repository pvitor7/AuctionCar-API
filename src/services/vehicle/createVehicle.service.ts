import AppDataSource from "../../data-source";
import Category from "../../entities/Category";
import Vehicle from "../../entities/Vehicle";
import User from "../../entities/User";
import { AppError } from "../../erros/AppError";
import {
  IVehicleRequestCreate,
  IVehicleResponseCreate,
} from "../../interfaces/motor.interface";
import createGalleryService from "../gallery/createGallery.service";
import CategoryRepository from "../../repositories/category.repository";

const createVehicleService = async (
  id: string,
  {
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
  }: IVehicleRequestCreate
): Promise<IVehicleResponseCreate> => {


  const userRepository = AppDataSource.getRepository(User);

  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError("Usuário não encontrado!", 404);
  }
  if (
    !heading ||
    !categorie ||
    !year ||
    !km ||
    !price ||
    !description ||
    !img
  ) {
    throw new AppError("Illegal arguments", 400);
  }


  let category: Category | null = await CategoryRepository.findOneBy({categorie});

  if (!category) {
    const newCategory = new Category();
    newCategory.categorie = categorie;
    category = await CategoryRepository.create(newCategory);
  }

  if (!category) {
    throw new AppError("Illegal arguments", 400);
  }

  const vehicle = new Vehicle();
  vehicle.heading = heading;
  vehicle.status = true;
  vehicle.year = year;
  vehicle.km = km;
  vehicle.price = price;
  vehicle.description = description;
  vehicle.published = published || false;
  vehicle.auction = auction || false;
  vehicle.img = img;
  vehicle.username = user.name;
  vehicle.userId = user.id;
  vehicle.category = category.categorie;
  vehicle.categorie = category;
  vehicle.user = user;
  vehicle.dateAuction = dateAuction ? dateAuction : new Date();

  vehicleRepository.create(vehicle);
  const newVehicle = await vehicleRepository.save(vehicle);
  createGalleryService(id, newVehicle.id, { url: img });

  if (gallery) {
    gallery.map(
      async (url: any) => await createGalleryService(id, newVehicle.id, { url: url.url })
    );
  }

  const vehicleResponse: IVehicleResponseCreate = {
    id: vehicle.id,
    heading,
    status,
    year,
    km,
    price,
    description,
    published,
    dateAuction,
    img,
    gallery,
    cratedAt: vehicle.createdAt,
    categorie: {
      id: category.id,
      categorie: category.categorie,
    },
  };

  return vehicleResponse;
};
export default createVehicleService;
