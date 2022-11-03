import AppDataSource from "../../data-source";
import { Category } from "../../entities/Category";
import { AppError } from "../../erros/AppError";

const retriveVehicleService = async (id: string) => {

    const vehicleRepository = AppDataSource.getRepository(Category);
  
    const category = await vehicleRepository.findOne({ 
      where: {
        id: id
      } 
    });
  
    if ( !category ) {
      throw new AppError("Vehicle not found", 404);
    }
  
    return category;
}

export default retriveVehicleService