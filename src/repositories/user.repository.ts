import AppDataSource from "../data-source";
import User from "../entities/User";

class UserRepository{

    static UserRepo = AppDataSource.getRepository(User);

    static async find(){
        return await this.UserRepo.find()
    }
    
    static async create(user: User){
        const users = AppDataSource.getRepository(User);
        users.create(user);
        return await users.save(user);
    }

    static async findByEmail(email: string){
        return await this.UserRepo.findOneBy({email})
    }

    static async findById(userId: string){
        return await this.UserRepo.findOne({where: {id: userId}
        });
    }

}

export default UserRepository;