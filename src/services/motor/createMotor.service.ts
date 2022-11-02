import AppDataSource from "../../data-source"
import { Category } from "../../entities/Category"
import { Vehicle } from "../../entities/Motor"
import { AppError } from "../../erros/AppError"
import { IVehicle, IVehicleRequestCreate, IVehicleResponseCreate } from "../../interfaces/motor.interface"

const createVehicleService = async ({heading, status, year, km, price, description, published, img, categorie}:IVehicleRequestCreate): Promise<IVehicleResponseCreate> => {

    const vehicleRepository = AppDataSource.getRepository(Vehicle)

    if ( !heading || !categorie || !status || !year || !km || !price || !description || !published || !img) {
        throw new AppError("Illegal arguments", 400)
    }

    const categoryRepository = AppDataSource.getRepository(Category)
    
    const category = await categoryRepository.findOneBy({ categorie: categorie });

    
    if ( !category ) {
        throw new AppError("Catgory not found", 404);
    }

    const vehicle = new Vehicle()
    vehicle.heading     = heading
    vehicle.status      = status
    vehicle.year        = year
    vehicle.km          = km
    vehicle.price       = price
    vehicle.description = description
    vehicle.published   = published
    vehicle.img         = img
    vehicle.categorie = category

    vehicleRepository.create(vehicle)
    await vehicleRepository.save(vehicle)

    const vehicleResponse: IVehicleResponseCreate = {
        id: vehicle.id,
        heading,
        status,
        year,
        km,
        price,
        description,
        published,
        img,
        crated_at:  vehicle.created_at,
        categorie: {
            id: category.id,
            categorie: category.categorie
        },
    }

    return vehicleResponse

}
export default createVehicleService