import AppDataSource from "../../data-source"
import Vehicle from "../../entities/Vehicle"
import { AppError } from "../../erros/AppError"
import VehicleRepository from "../../repositories/vehicle.repository"

export const deleteVehicleService = async (id: string) => {

    const vehicle = await VehicleRepository.findOne(id)
    
    if( !vehicle[0] ) {
        throw new AppError("Vehicle not found", 404)
    }
        
    await VehicleRepository.update(vehicle[0].id, {status: false, auction: false})
    
   
    return "Anúncio desativado com sucesso!"

}

export default deleteVehicleService