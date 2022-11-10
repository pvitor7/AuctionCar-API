import { Router } from "express"
import createGalleryController from "../controllers/gallery/createGallery.controller"
import listGalleryController from "../controllers/gallery/listGallery.controller"

const gallery = Router()

gallery.post("/:id", createGalleryController)

gallery.get("", listGalleryController)

export default gallery