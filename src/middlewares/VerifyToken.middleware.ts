import "dotenv/config"
import { NextFunction, Request,Response } from "express"
import jwt from "jsonwebtoken"

export const AuthMiddleware = (req: Request, res:Response, next:NextFunction) => {

    const token = req.headers.authorization
    
    if( !token ) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
    
    
    const splitToken = token.split(" ")[1]
    
    console.log(splitToken)
    console.log(typeof splitToken)
    
    jwt.verify(splitToken, process.env.SECRET_KEY as string, (error: any, decoded: any) => {
        
        if (error){
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        
        req.user = {
            id: decoded.id,
            is_active: decoded.is_active
        }
        
        next()
        
    })

}