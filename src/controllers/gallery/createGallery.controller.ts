import { Request, Response } from "express"
import createGalleryService from "../../services/gallery/createGallery.service"

const createGalleryController = async( req: Request, res: Response ) => {

    const idUser = req.user.id
    const { url } = req.body
    const id = req.params.id
    const photo = await createGalleryService(idUser, id, {url})
    return res.status(201).json(photo)
}

export default createGalleryController