import AppDataSource from "../../data-source"
import Vehicle from "../../entities/Vehicle";

const listVehicleService = async ():Promise<Vehicle[]> => {

    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    
    const vehicle = await vehicleRepository.query('select*from vehicle')

    return vehicle.filter((vehicle: Vehicle) => vehicle.status)
}

export default listVehicleService