import { v4 as uuidv4 } from "uuid"
import  AppDataSource  from "../../data-source"
import { User } from "../../entities/User"
import { AppError } from "../../erros/AppError"
import { hash } from "bcryptjs"
import { IUserRequest, IUserResponseCreate } from "../../interfaces/user.interface"

const createUserServive = async ({name, celphone, email, password, is_active}:IUserRequest): Promise<IUserResponseCreate> => {

    const userRepository = AppDataSource.getRepository(User)

    if ( !name || !email || !password || !celphone) {

        throw new AppError("Illegal arguments", 400)

    }

    const users = await userRepository.find()

    const emailAlreadyExisty = users.find(user => user.email === email)

    if ( emailAlreadyExisty ) {
        throw new AppError("Email alredy existy", 409)
    }

    const hashedPassword = await hash(password, 10);

    const user = new User ()
    user.name      =  name
    user.celphone  =  celphone
    user.email     =  email
    user.password  =  hashedPassword
    user.is_active =  is_active

    userRepository.create(user)
    await userRepository.save(user)

    const userResponse: IUserResponseCreate = {
        id: user.id,
        name,
        email,
        celphone,
        is_active,
        created_at: user.created_at,
    }

    return userResponse

}

export default createUserServive