import { Request, Response} from "express"
import { json } from "stream/consumers"
import createCommentService from "../../services/comment/createComment.service"

const createCommentController = async (req: Request, res: Response) => {

    const user_id = req.user.id

    const {user_comment, vehicle_id} = req.body

    const newComment = await createCommentService({user_comment, user_id, vehicle_id})

    return res.status(201).json(newComment)
}

export default createCommentController