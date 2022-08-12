//declaraciones globales del modelo
import {Users} from '@prisma/client';
export {}

declare global {
    namespace Express {
        interface Request {
            users?: Users
            user_id: string
        }
    }
}