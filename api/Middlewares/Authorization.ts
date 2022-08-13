import {Request, Response, NextFunction} from 'express'

import  Jwt  from 'jsonwebtoken';

//  interface IRequest extends Request { user_id: {} }//crear propiedades al req




export const Admin = async  (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try {
        const headerToken = req.get("Authorization");
        if(!headerToken){
            res.status(400).json({succes: false, error: 'Token no valido'})
        }
        console.log(headerToken);
        const token = headerToken?.replace("Bearer ", "");
        try {
            
            const decoded = Jwt.verify(token!, process.env.TOKEN_SECRET_ADMIN! )// ! asegurar que va a llegar
            console.log(decoded);
            // req.user_id =  decoded
            next()
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    } catch (error) {
        
    }
}

export const Artist = async  (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try {
        
        const headerToken = req.get("Authorization");
        if(!headerToken){
            res.status(400).json({succes: false, error: 'Token no valido'})
        }
        console.log(headerToken);
        const token = headerToken?.replace("Bearer ", "");
        try {
            const decoded = Jwt.verify(token!, process.env.TOKEN_SECRET_ARTIST! )// ! asegurar que va a llegar
            console.log(decoded);
            // req.user_id =  decoded
            next()
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    } catch (error) {
        
    }
    
}


export const Contractor = async  (req:Request, res:Response, next:NextFunction): Promise<void> => {

    try {
        const headerToken = req.get("Authorization");
        if(!headerToken){
            res.status(400).json({succes: false, error: 'Token no valido'})
        }
        console.log(headerToken);
        const token = headerToken?.replace("Bearer ", "");
        try {
            const decoded = Jwt.verify(token!, process.env.TOKEN_SECRET_CONTRACTOR! )//asegurar que va a llegar
            console.log(decoded);
            // req.user_id =  decoded
            next()
        } catch (error) {
            res.status(400).send(error)
        }
    } catch (error) {
        
    }
    
}

