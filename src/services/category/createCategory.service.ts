import AppDataSource from "../../data-source";
import { Category } from "../../entities/Category";
import { AppError } from "../../erros/AppError";
import { ICategoryRequestCreate, ICategoryResponseCreate } from "../../interfaces/category.interface";

const createCategoryService = async ({categorie}:ICategoryRequestCreate): Promise<ICategoryResponseCreate> => {

    const categoryRepository = AppDataSource.getRepository(Category)

    if ( !categorie ) {
        throw new AppError("Illegal arguments", 400)
    }

    const categories = await categoryRepository.find()

    const categorieAlreadyExisty = categories.find((category) => category.categorie == categorie)

    if ( categorieAlreadyExisty ) {
        return categorieAlreadyExisty;
    }

    const category = new Category()
    category.categorie = categorie

    categoryRepository.create(category)
    await categoryRepository.save(category)

    const categoryResponse: ICategoryResponseCreate = {
        id: category.id,
        categorie: category.categorie,
        created_at: category.created_at,
    }

    return categoryResponse
}

export default createCategoryService