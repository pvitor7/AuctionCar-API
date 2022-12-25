import { Router } from "express"
import createGalleryController from "../controllers/gallery/createGallery.controller"
import listGalleryController from "../controllers/gallery/listGallery.controller"
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware"

const gallery = Router()

gallery.post("/:id", AuthMiddleware, createGalleryController)

gallery.get("", listGalleryController)

export default gallery