import { Router } from "express"
import createCategoryController from "../controllers/category/createCategory.controller"
import listCategoryController from "../controllers/category/listCategories.controller"
import retriveCategoryController from "../controllers/category/retriveCategory.controller"

const category = Router()

category.post("", createCategoryController)

category.get("", listCategoryController)

category.get("/:id", retriveCategoryController)

export default category