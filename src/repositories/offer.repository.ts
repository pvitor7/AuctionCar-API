import AppDataSource from "../data-source";
import Offers from "../entities/Offers";
import Vehicle from "../entities/Vehicle";

class OffersRepository{

    static OffersRepo = AppDataSource.getRepository(Offers);

    static async find(){
        return await this.OffersRepo.find();
    }

    static async create(offer: Offers){
        this.OffersRepo.create(offer);
        return await this.OffersRepo.save(offer);
    }

    static async findVehicleId(vehicle: Vehicle){
        return await this.OffersRepo.find({where: {vehicle: vehicle}});
    }

    static async findBy(id: Vehicle){
        return await this.OffersRepo.find({where: {vehicle: id}});
    }
}

export default OffersRepository;