import { Request, Response } from "express"
import createCategoryService from "../../services/category/createCategory.service"

const createCategoryController = async (req: Request, res: Response) => {

    const {categorie} = req.body

    const newCategorie = await createCategoryService({categorie})

    return res.status(201).json(newCategorie)
}

export default createCategoryController