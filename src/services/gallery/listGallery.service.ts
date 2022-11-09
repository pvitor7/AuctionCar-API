import AppDataSource from "../../data-source";
import { Gallery } from "../../entities/Gallery";

const listGalleryService = async (): Promise<Gallery[]> => {

    const galleryRepository = AppDataSource.getRepository(Gallery)

    const photos = galleryRepository.query('select*from gallery')

    return photos

}

export default listGalleryService