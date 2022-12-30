import {Request, Response } from "express"
import retriveVehicleService from "../../services/category/retriveCategory.service"

const retriveCategoryController = async (req: Request, res: Response) => {

    const name = req.params.name

    const user = await retriveVehicleService(name)

    return res.status(200).json(user)
}

export default retriveCategoryController