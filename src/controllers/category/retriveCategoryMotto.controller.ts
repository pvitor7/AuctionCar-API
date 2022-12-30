import { Request, Response } from "express" 
import retriveCategoryMottoService from "../../services/category/retriveCategoryMotto.service"

const retriveCategoryMottoController = async ( req: Request, res: Response) => {

    const carCategory = await retriveCategoryMottoService()

    return res.json(carCategory)

}

export default retriveCategoryMottoController