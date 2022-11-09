import { Request, Response } from "express"
import createGalleryService from "../../services/gallery/createGallery.service"

const createGalleryController = async( req: Request, res: Response ) => {

    const { url } = req.body

    const id = req.params.id

    const photo = createGalleryService(id,{url})

    return photo
}

export default createGalleryController