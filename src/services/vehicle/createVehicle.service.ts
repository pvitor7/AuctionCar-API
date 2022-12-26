import AppDataSource from "../../data-source"
import Category from "../../entities/Category"
import Vehicle from "../../entities/Vehicle"
import User from "../../entities/User"
import { AppError } from "../../erros/AppError"
import { IVehicleRequestCreate, IVehicleResponseCreate } from "../../interfaces/motor.interface"
import createCategoryService from "../category/createCategory.service"

const createVehicleService = async (id:string,{
    heading,
    status,
    year,
    km,
    price,
    description,
    published,
    auction,
    img,
    categorie,
    dateAuction
    }:IVehicleRequestCreate): Promise<IVehicleResponseCreate> => {
    
    const userRepository = AppDataSource.getRepository(User)
    
    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    
    const user = await userRepository.findOneBy({ id: id });

    if ( !user ) {
        throw new AppError("User not found", 404);
    }
    if ( !heading || !categorie || !status || !year || !km || !price || !description || !img) {
        throw new AppError("Illegal arguments", 400)
    }

    await createCategoryService({categorie});

    const categoryRepository = AppDataSource.getRepository(Category)
    
    const category = await categoryRepository.findOneBy({ categorie: categorie });
        
    if ( !category ){
        throw new AppError("Category not found", 404);
    }
    
    const vehicle = new Vehicle
    vehicle.heading     = heading
    vehicle.status      = status? true: false;
    vehicle.year        = year
    vehicle.km          = km
    vehicle.price       = price
    vehicle.description = description
    vehicle.published   = published || false
    vehicle.auction     = auction || false
    vehicle.img         = img
    vehicle.username   = user.name
    vehicle.userId     = user.id
    vehicle.category   = category.categorie
    vehicle.categorie   = category
    vehicle.user        = user
    vehicle.dateAuction = dateAuction ? dateAuction : new Date()

    
    vehicleRepository.create(vehicle)
    console.log("vehicle")
    const teste = await vehicleRepository.save(vehicle)
    console.log(teste)

    const vehicleResponse: IVehicleResponseCreate = {
        id: vehicle.id,
        heading,
        status,
        year,
        km,
        price,
        description,
        published,
        dateAuction,
        img,
        cratedAt:  vehicle.createdAt,
        categorie: {
            id: category.id,
            categorie: category.categorie
        },
    }

    return vehicleResponse

}
export default createVehicleService