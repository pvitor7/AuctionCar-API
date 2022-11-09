import { Request, Response } from "express"
import listGalleryService from "../../services/gallery/listGallery.service"

const listGalleryController = async ( req: Request, res: Response ) => {

    const photos = await listGalleryService()

    return res.json(photos)

}

export default listGalleryController