import AppDataSource from "../../data-source"
import { Vehicle } from "../../entities/Motor";
import { User } from "../../entities/User";
import retriveUserService from "../user/retriveUser.service";

const listVehicleService = async ():Promise<Vehicle[]> => {

    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    
    const vehicle = await vehicleRepository.query('select*from vehicle')

    if(vehicle){
        vehicle.map(async (element: any) => {
            element = {...element, userId: await retriveUserService(element.userId)}
        })
    }
    return vehicle
}

export default listVehicleService