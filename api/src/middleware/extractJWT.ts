import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SERVER_TOKEN_SECRET } from '../app';

const extractJWT = (req: Request, res: Response, next: NextFunction): any => {
    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, SERVER_TOKEN_SECRET, (error, decoded): any => {
            if (error) {
                return res.status(404).json({
                    message: error.message,
                    error
                });
            } else {
                res.locals.jwt = decoded;
                res.locals.jwt.token = token;
                next();
            }
        });
    } else {
        return res.status(401).json({
            authorized: false
        });
    }
};

export default extractJWT