import { Request, Response } from "express"
import listUserService from "../../services/user/listUsers.service"

const listUserController = async (req: Request, res: Response) => {

    const users = await listUserService()

    return res.json(users)

}

export default listUserController