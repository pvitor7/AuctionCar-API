import AppDataSource from "../../data-source"
import { Vehicle } from "../../entities/Motor";

const listVehicleService = async ():Promise<Vehicle[]> => {

    const vehicleRepository = AppDataSource.getRepository(Vehicle)

    const vehicle = vehicleRepository.query('select*from vehicle')

    return vehicle
}

export default listVehicleService