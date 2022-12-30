import AppDataSource from "../../data-source";
import Category from "../../entities/Category";
import { AppError } from "../../erros/AppError";

const retriveCategoryCarService = async () => {

    const categoryRepository = AppDataSource.getRepository(Category);

    const categorie = await categoryRepository.findOneBy({ categorie: "Carro" });

    if ( !categorie ) {
        throw new AppError("Category not found", 404);
    }

    const id = categorie.id
  
    const category = await categoryRepository.findOne({ 
      where: {
        id: id
      } 
    });
  
    if ( !category ) {
      throw new AppError("Category not found", 404);
    }
  
    return category;
}

export default retriveCategoryCarService