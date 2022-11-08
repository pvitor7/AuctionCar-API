import AppDataSource from "../../data-source";
import { Category } from "../../entities/Category";
import { AppError } from "../../erros/AppError";

const retriveCategoryMottoService = async () => {

    const categoryRepository = AppDataSource.getRepository(Category);

    const categorie = await categoryRepository.findOneBy({ categorie: "Moto" });

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

export default retriveCategoryMottoService