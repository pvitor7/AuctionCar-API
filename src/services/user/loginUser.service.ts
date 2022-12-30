import { compare } from "bcryptjs"
import AppDataSource from "../../data-source"
import jwt from "jsonwebtoken"
import User from "../../entities/User"
import { AppError } from "../../erros/AppError"
import { IUserLogin } from "../../interfaces/user.interface"

const userLoginService = async ({email, password}: IUserLogin) => {

    const userRepository = AppDataSource.getRepository(User)
    
    const account = await userRepository.findOneBy({email})
    
    if (!account ) {
        throw new AppError("Usuário ou senha inválidos!", 404)
    }
    
    const passwordMatch = await compare(password, account.password)
    
    if ( !passwordMatch ) {
        throw new AppError("Usuário ou senha inválidos!", 403)
    }
    
    const token = jwt.sign({
        id: account.id,
        is_active: account.is_active
    },
    process.env.SECRET_KEY as string,
    {
        expiresIn: "24h"
    })

    return token
}

export default userLoginService