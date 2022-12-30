import AppDataSource from "../../data-source"
import Gallery from "../../entities/Gallery"
import Vehicle from "../../entities/Vehicle"
import { AppError } from "../../erros/AppError"
import { IGallery, IGalleryRequestCreate } from "../../interfaces/gallery.interface"

const createGalleryService = async ( idUser: string, id:string, {url}:IGalleryRequestCreate): Promise<IGallery> => {

    const galleryRepository = AppDataSource.getRepository(Gallery)
    const vehicleRepository = AppDataSource.getRepository(Vehicle)

    if( !url || !id ) {
        throw new AppError("Dados inválidos", 400)
    }

    const vehicle = await vehicleRepository.findOneBy({ id: id })

    if ( !vehicle ) {
        throw new AppError("Veículo não encontrado!", 404)
    }
    
    if(vehicle.userId != idUser){
        throw new AppError("Usuário não autorizado!", 403)
    }

    if(vehicle.photos.length >= 12){
        throw new AppError("O veículo só pode possuir até 12 fotos", 404)
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