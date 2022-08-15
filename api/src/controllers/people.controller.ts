import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const peopleController = {
    getAll: async (_req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const people = await prisma.persona.findMany();
        if (people.length > 0) {
            return res.status(200).json(people);
        }
        return res.status(500).json({ message: 'No se encontraron resultados' });
    },
    create: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { name, lastname, city, country } = req.body;
        try {
            const person = await prisma.persona.create({
                data: { name, lastname, city, country }
            });

            if (!person) {
                throw 'Ocurrió un problema al crear la persona.';
            }

            return res.status(201).json(person);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}

export default peopleController;