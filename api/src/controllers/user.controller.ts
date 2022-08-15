import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

// type users = {
//     email: string
//     password: string
//     city: string
//     country: string
//     rol: string
// }

const userController = {
    getUsers: async (_req: Request, res: Response) => {
        const allUsers = await prisma.users.findMany()
        res.status(201).json({ data: allUsers })

    },
    registerUser: async (_req: Request, _res: Response) => {
        // const { email, password, city, country, rol } = req.body;
        // const newUser: users = await prisma.users.create({
        //     data: {
        //         email,
        //         password,
        //         city,
        //         country,
        //         rol: rol
        //     }
        // });
        // res.status(200).json({ data: newUser })
        // return newUser
    }
}

export default userController;








