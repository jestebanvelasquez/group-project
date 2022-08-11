/* import { PrismaClient } from '@prisma/client'; */
import { Response, Request } from 'express';

/* const prisma = new PrismaClient({ log: ['query', 'info'] });

const categorys = [
    { "name": "poesía" },
    { "name": "cuentos" },
    { "name": "teatro" },
    { "name": "Danza" },
    { "name": "Escultura" },
    { "name": "Música" },
    { "name": "Pintura" },
    { "name": "Fotografía" },
    { "name": "baile " },
    { "name": "canto" },
    { "name": "stand-up" },
    { "name": "mimo" },
    { "name": "diversion infantil" }
] */

const categoryController = {
    createCategories: async (_req: Request, res: Response) => {
        res.status(200).send('Se crean las categorías');
        /* const categorysDb = await prisma.category.findMany()
        try {
            if (!categorysDb.length) {
                categorys.map(async (el) => {
                    await prisma.category.create({ data: el })
                })
            }
        } catch (error) {
            return error
        } */
    },
    getCategories: async (_req: Request, res: Response) => {
        /* const categorys = await prisma.category.findMany()
        return categorys.sort(); */
        res.status(200).send('Se obtienen las categorías');
    }
}

export default categoryController;








