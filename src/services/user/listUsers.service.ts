import AppDataSource from "../../data-source";
import User from "../../entities/User";


const listUserService = async ():Promise<User[]> => {

    const userRepository = AppDataSource.getRepository(User)
    const users = userRepository.query('select*from users')
    return users
}

export default listUserService