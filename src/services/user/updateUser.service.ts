import AppDataSource from "../../data-source";
import { User } from "../../entities/User";
import { AppError } from "../../erros/AppError";
import { IUserRequestUpdate, IUserResponseUpdate } from "../../interfaces/user.interface";


const updateUserService = async (id: string, {name, email, celphone}:IUserRequestUpdate): Promise<IUserResponseUpdate> => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const emailAlreadyExisty = users.find(user => user.email === email)

    if ( emailAlreadyExisty ) {
        throw new AppError("Email alredy existy", 409)
    }

    const user = await userRepository.findOne({ where: { id } })

    if (!user) {
        throw new AppError("User not found.", 404)
    }

    if ( !name ) {
        name = user.name
    }
    
      if ( !email ) {
        email = user.email
    }
  
      if ( !celphone ) {
        celphone = user.celphone
    }

    const updateUser = {
        id: user.id,
        name: name,
        email: email,
        celphone: celphone,
        updated_at: new Date(),
    }

    await userRepository.update(user.id, updateUser)

    return updateUser

}

export default updateUserService