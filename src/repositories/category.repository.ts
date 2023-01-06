import AppDataSource from "../data-source";
import Category from "../entities/Category";

class CategoryRepository{

    static CategoryRepo = AppDataSource.getRepository(Category);

    static async find(){
        return await this.CategoryRepo.find();
    }

    static async create(category: Category){
        this.CategoryRepo.create(category)
        return await this.CategoryRepo.save(category)
    }

    static async findOneByCategory(category: string):Promise<Category | null>{
        return await this.CategoryRepo.findOneBy({categorie: category});
    }
}

export default CategoryRepository;