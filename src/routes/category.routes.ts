import { Router } from "express"
import createCategoryController from "../controllers/category/createCategory.controller"
import listCategoryController from "../controllers/category/listCategories.controller"
import retriveCategoryController from "../controllers/category/retriveCategory.controller"
import retriveCategoryCarController from "../controllers/category/retriveCategoryCar.controller"
import retriveCategoryMottoController from "../controllers/category/retriveCategoryMotto.controller"

const category = Router()

category.post("", createCategoryController)

category.get("", listCategoryController)

category.get("/list/:id", retriveCategoryController)

category.get("/car", retriveCategoryCarController)

category.get("/motorcycle", retriveCategoryMottoController)

category.get("/:name", retriveCategoryController)

export default category