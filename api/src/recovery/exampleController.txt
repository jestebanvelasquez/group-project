import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({log: ['query', 'info']})//para ver que es lo que hace prisma por debajo mediante la consola



export const getExample = async () => {
    const categorys = await prisma.category.findMany()
    return categorys.sort();
    // return('hola desde example')
}