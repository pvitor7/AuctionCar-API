import { Request, Response } from "express" 
import retriveCategoryCarService from "../../services/category/retriveCategoryCar.service"

const retriveCategoryCarController = async ( req: Request, res: Response) => {

    const carCategory = await retriveCategoryCarService()

    return res.json(carCategory)

}

export default retriveCategoryCarController