import AppDataSource from "../../data-source"
import Gallery from "../../entities/Gallery"
import Vehicle from "../../entities/Vehicle"
import { AppError } from "../../erros/AppError"
import { IGallery, IGalleryRequestCreate } from "../../interfaces/gallery.interface"

const createGalleryService = async ( id:string, {url}:IGalleryRequestCreate): Promise<IGallery> => {

    const galleryRepository = AppDataSource.getRepository(Gallery)

    const vehicleRepository = AppDataSource.getRepository(Vehicle)

    if( !url || !id ) {
        throw new AppError("Illegal Arguments", 400)
    }

    const vehicle = await vehicleRepository.findOneBy({ id: id })

    if ( !vehicle ) {
        throw new AppError("Vehicle not found", 404)
    }

    const gallery = new Gallery()
    gallery.url = url
    gallery.vehicle = vehicle

    galleryRepository.create(gallery)
    await galleryRepository.save(gallery)

    const galleryResponse: IGallery = {
        id: gallery.id,
        url
    }

    return galleryResponse
}

export default createGalleryService