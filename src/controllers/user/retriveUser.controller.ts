import { Request, Response} from "express"
import retriveUserService from "../../services/user/retriveUser.service"

const retriveUserController = async (req: Request, res: Response) => {

    const id = req.user.id

    const user = await retriveUserService(id)

    return res.status(200).json(user)
}

export default retriveUserController