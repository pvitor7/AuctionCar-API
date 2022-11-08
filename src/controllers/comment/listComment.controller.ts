import { Request, Response } from "express"
import listCommentsService from "../../services/comment/listComments.service"

const listCommentController = async (req: Request, res: Response) => {

    const comments = await listCommentsService()

    return res.json(comments)
}

export default listCommentController