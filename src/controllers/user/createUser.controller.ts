import {Request, Response } from "express"
import createUserServive from "../../services/user/createUser.service"

const createUserController = async (req: Request, res: Response) => {

    const {name, email, celphone, password, is_active} = req.body
    
    const newUser = await createUserServive({name, email, celphone, password, is_active})

    return res.status(201).json(newUser)

}

export default createUserController