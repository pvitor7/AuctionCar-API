import { AppError } from "../../erros/AppError";
import VehicleRepository from "../../repositories/vehicle.repository";


const updateVehicleService = async (userId: string, id: string, {
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
  }: any) => {
    
    const vehicleExists = await VehicleRepository.findOne(id);

    if(!vehicleExists[0]){
        throw new AppError("Veículo foi encontrado!", 404)
    }

    if(userId != vehicleExists[0].id){
        throw new AppError("Usuário não autorizado!", 403);
    }

    const vehicleUpdated = await VehicleRepository.update(vehicleExists[0].id, {
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
      });

    return vehicleUpdated; 
}

export default updateVehicleService;