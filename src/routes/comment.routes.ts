import { Router } from "express"
import createCommentController from "../controllers/comment/createComment.controller"
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware"

const comment = Router()

comment.post("",AuthMiddleware, createCommentController)

export default comment