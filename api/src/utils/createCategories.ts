import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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

export const createCategories = async () => {
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
}