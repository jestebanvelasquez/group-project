import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const showController = {
    getShows: async (req: Request, res: Response): Promise<any> => {
        const { name } = req.query;
        if (name) {
            const showByName: string[] = await prisma.$queryRaw`SELECT "public"."Show"."id", "public"."Show"."nickName", "public"."Show"."eventName", "public"."Show"."description", "public"."Show"."imagesEvent", "public"."Show"."duration", "public"."Show"."isActive", "public"."Show"."priceTime", "public"."Show"."priceDay" FROM "public"."Show" WHERE "public"."Show"."nickName" LIKE ${`%${name}%`}`;
            console.log(showByName);
            return res.send(showByName)
        } else {
            const shows = await prisma.show.findMany({
                include: {
                    categories: {
                        select: {
                            category: true
                        }
                    },
                    members: {
                        select: {
                            user: true
                        }
                    }
                }
            })
            return res.status(200).json({ data: shows })
        }
    },
    getShowsById: async (req: Request, res: Response) => {
        const { id } = req.body;
        try {
            const show = await prisma.show.findFirst({
                where: {
                    id
                }
            });
            res.status(200).json([show]);
        } catch (error) {
            res.status(400).send(error)
        }
    },
    createShow: async (req: Request, res: Response, _next: NextFunction) => {
        const user = await prisma.users.findUnique({
            where: {
                id: req.params.id
            }
        })//validar que sea artist o admin
        try {
            if (user?.rol === 'ADMIN' || user?.rol === 'ARTIST') {
                const newShow = await prisma.show.create({
                    data: {
                        nickName: req.body.nickName,
                        eventName: req.body.eventName,
                        description: req.body.description,
                        duration: req.body.duration,
                        imagesEvent: req.body.imagesEvent,
                        priceTime: req.body.priceTime,
                        priceDay: req.body.priceDay,
                        categories: {

                            create: {
                                category: {
                                    connect: {
                                        id: req.body.categories
                                    }
                                }
                            }
                        },
                        members: {
                            create: {
                                userId: req.params.id
                            }
                        }
                    },
                })
                res.status(201).json({ data: newShow })
            } else {
                res.status(400).send('no tienes permisos para ingresar a esta herramienta')
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default showController;