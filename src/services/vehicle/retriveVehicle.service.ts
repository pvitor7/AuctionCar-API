import { AppError } from "../../erros/AppError";
import VehicleRepository from "../../repositories/vehicle.repository";

const retriveVehicleService = async (id: string) => {
  
  const vehicle = await VehicleRepository.findOne(id);
  
    if (!vehicle ) {
      throw new AppError("Vehicle not found", 404);
    }
  
    return vehicle;
}

export default retriveVehicleService