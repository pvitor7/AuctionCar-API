import { Router } from "express"
import createCommentController from "../controllers/comment/createComment.controller"
import listCommentController from "../controllers/comment/listComment.controller"
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware"

const comment = Router()

comment.post("/:id",AuthMiddleware, createCommentController)

comment.get("", listCommentController)

export default comment