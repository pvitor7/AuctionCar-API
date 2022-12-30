import AppDataSource from "../data-source";
import Vehicle from "../entities/Vehicle";

class VehicleRepository {
  static VehicleRepo = AppDataSource.getRepository(Vehicle);

  static async find() {
    return await this.VehicleRepo.find();
  }

  static async create(vehicle: Vehicle) {
    this.VehicleRepo.create(vehicle);
    return await this.VehicleRepo.save(vehicle);
  }

  static async findOne(id: string) {

    return await this.VehicleRepo.find({where: {id: id}});
  }
}

export default VehicleRepository;
