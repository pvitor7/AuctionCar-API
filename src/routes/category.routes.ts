import { Router } from "express"
import createCategoryController from "../controllers/category/createCategory.controller"
import listCategoryController from "../controllers/category/listCategories.controller"
import retriveCategoryController from "../controllers/category/retriveCategory.controller"
import retriveCategoryMottoController from "../controllers/category/retriveCategoryMotto.controller"
import { AuthMiddleware } from "../middlewares/VerifyToken.middleware"

const category = Router()

category.post("", AuthMiddleware, createCategoryController)

category.get("", listCategoryController)

category.get("/:name", retriveCategoryController)

category.get("/list/:id", retriveCategoryController)

// category.get("/motorcycle", retriveCategoryMottoController)

export default category