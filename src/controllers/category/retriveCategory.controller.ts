import {Request, Response } from "express"
import retriveVehicleService from "../../services/category/retriveCategory.service"
import retriveCategoryService from "../../services/category/retriveCategory.service"

const retriveCategoryController = async (req: Request, res: Response) => {

    const name = req.params.name

    const user = await retriveCategoryService(name)

    return res.status(200).json(user)
}

export default retriveCategoryController