import AppDataSource from "../../data-source";
import { User } from "../../entities/User";
import { AppError } from "../../erros/AppError";
import { IUserRequestUpdate, IUserResponseUpdate } from "../../interfaces/user.interface";


const updateUserService = async (id: string, {name, password, celphone}:IUserRequestUpdate): Promise<IUserResponseUpdate> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({ where: { id } })

    if (!user) {
        throw new AppError("User not found.", 404)
    }

    if ( !name ) {
        name = user.name
    }
    
      if ( !password ) {
        password = user.email
    }
  
      if ( !celphone ) {
        celphone = user.celphone
    }

    const updateUser = {
        id: user.id,
        name: name,
        password: password,
        celphone: celphone,
        updated_at: new Date(),
    }

    await userRepository.update(user.id, updateUser)

    return updateUser

}

export default updateUserService