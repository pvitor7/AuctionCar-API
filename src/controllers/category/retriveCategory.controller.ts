import {Request, Response } from "express"
import retriveVehicleService from "../../services/category/retriveCategory.seervice"

const retriveCategoryController = async (req: Request, res: Response) => {

    const id = req.params.id

    const user = await retriveVehicleService(id)

    return res.status(200).json(user)
}

export default retriveCategoryController