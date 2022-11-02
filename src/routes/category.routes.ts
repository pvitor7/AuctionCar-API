import { Router } from "express"
import createCategoryController from "../controllers/category/createCategory.controller"
import listCategoryController from "../controllers/category/listCategories.controller"

const category = Router()

category.post("", createCategoryController)

category.get("", listCategoryController)

export default category