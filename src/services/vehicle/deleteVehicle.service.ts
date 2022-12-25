import AppDataSource from "../../data-source"
import Vehicle from "../../entities/Vehicle"
import { AppError } from "../../erros/AppError"

export const deleteVehicleService = async (id: string) => {

    const userRepository = AppDataSource.getRepository(Vehicle)

    const vehicle = await userRepository.findOne({ where: { id } })

    if( !vehicle ) {
        throw new AppError("Vehicle not found", 404)
    }

    await userRepository.delete({id: id})

    return vehicle

}

export default deleteVehicleService