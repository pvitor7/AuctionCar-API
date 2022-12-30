import AppDataSource from "../../data-source"
import Category from "../../entities/Category"

const listCategoryService = async ():Promise<Category[]> => {

    const categoryRepository = AppDataSource.getRepository(Category)

    const category = categoryRepository.query('select * from category')

    return category
}

export default listCategoryService