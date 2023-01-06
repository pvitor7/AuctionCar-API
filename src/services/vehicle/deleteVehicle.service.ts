import AppDataSource from "../../data-source"
import Vehicle from "../../entities/Vehicle"
import { AppError } from "../../erros/AppError"
import VehicleRepository from "../../repositories/vehicle.repository"

export const deleteVehicleService = async (id: string) => {

    const vehicle = await VehicleRepository.findOne(id)
    
    if( !vehicle[0] ) {
        throw new AppError("Vehicle not found", 404)
    }
    
    
    const vehicleDeleted = await VehicleRepository.delete(vehicle[0].id)
    
    console.log(vehicle[0])
    console.log("Chegou")

    return vehicleDeleted

}

export default deleteVehicleService