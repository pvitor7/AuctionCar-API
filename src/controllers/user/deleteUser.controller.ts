import { Request, Response} from "express"
import softDeleteUserService from "../../services/user/deleteUser.service"


const softDeleteController = async (req: Request, res: Response) => {

    const id = req.params.id

    await softDeleteUserService(id)

    return res.status(204).json({message: "Data Deleted"})
  
}

export default softDeleteController