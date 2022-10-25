import { Request, Response} from "express"
import updateUserService from "../../services/user/updateUser.service"

const updateUserController = async (req: Request, res: Response) => {

    const id = req.params.id

    const {name, email, celphone} = req.body

    const userUpdated = await updateUserService(id,{name, email, celphone})

    return res.status(201).json({
        message: "User Updated",
        user: userUpdated
    })
    
}