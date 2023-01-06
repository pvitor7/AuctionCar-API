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

  static async update(id: string, vehicle: any) {
   return await this.VehicleRepo.update(id , {...vehicle});
  }

  static async delete(id: string) {
    return await this.VehicleRepo.delete({ id });
   }
}

export default VehicleRepository;
