import { Router } from "express"
import createCategoryController from "../controllers/category/createCategory.controller"

const category = Router()

category.post("", createCategoryController)

export default category