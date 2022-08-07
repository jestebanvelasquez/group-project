import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({log: ['query', 'info']})//para ver que es lo que hace prisma por debajo


const categorys = [
    {"name" : "poesía" },
    {"name" : "cuentos" },
    {"name" : "teatro" },
    {"name" : "Danza" },
    {"name" : "Escultura" },
    {"name" : "Música" },
    {"name" : "Pintura" },
    {"name" : "Fotografía" },
    {"name" : "baile " },
    {"name" : "canto" },
    {"name" : "stand-up" },
    {"name" : "mimo" },
    {"name" : "diversion infantil" }
]


export const createCategorys = async () => {
    const categorysDb = await prisma.category.findMany()
    try {
        if(!categorysDb.length){
            categorys.map(async(el) =>{
                await prisma.category.create({data:el})
            })
        }
    } catch (error) {
        return error
    }
}


export const getCategorys = async () => {
    const categorys = await prisma.category.findMany()
    return categorys.sort();
}








