import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

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
]

const categoryController = {
    createCategories: async () => {
        const categorysDb = await prisma.category.findMany()
        try {
            if (!categorysDb.length) {
                categorys.map(async (ele: { name: string; }) => {
                    await prisma.category.create({
                        data: {
                            name: ele.name,
                            asignedBy: 'ADMIN'
                        }
                    })
                })
            }
        } catch (error) {
            return error
        }
    },
    getCategories: async (_req: Request, res: Response) => {
        const categorys = await prisma.category.findMany()
        res.status(200).json({ data: categorys.sort() });
    }
}

export default categoryController;








