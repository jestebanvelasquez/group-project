import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const artistController = {
    getArtist: async (req: Request, res: Response): Promise<any> => {
        const { name } = req.query;
        try {
            if (name) {
                const artistByName = await prisma.artista.findMany({
                    where: {
                        name: {
                            search: `${name}`
                        }
                    },
                    include: {
                        usuario: {
                            include: {
                                persona: true
                            }
                        }
                    }
                });
                if (artistByName.length > 0) {
                    return res.status(200).json({
                        status: 'success',
                        data: artistByName
                    });
                } else {
                    throw `No se encontraron artistas con el nombre de »${name}«.`;
                }
            } else {
                const artists = await prisma.artista.findMany({
                    include: {
                        usuario: {
                            include: {
                                persona: true
                            }
                        }
                    }
                });
                if (artists.length > 0) {
                    return res.status(200).json(artists);
                } else {
                    throw `No se encontraron resultados.`;
                }
            }
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                data: error
            });
        }
    },
    getArtistById: async (req: Request, res: Response): Promise<any> => {
        const { id } = req.params;
        try {
            console.log(id);
            const artist = await prisma.artista.findFirst({
                where: {
                    id
                },
                include: {
                    usuario: {
                        include: {
                            persona: true
                        }
                    }
                }
            });
            if (artist) {
                return res.status(200).json({
                    status: 'success',
                    data: artist
                });
            } else {
                throw `No se encontró el artista por el id »${id}«.`;
            }
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                data: error
            })
        }
    },
    // createArtist: async (req: Request, res: Response, _next: NextFunction) => {
    //     const user = await prisma.users.findUnique({
    //         where: {
    //             id: req.params.id
    //         }
    //     })//validar que sea artist o admin
    //     try {
    //         if (user?.rol === 'ADMIN' || user?.rol === 'ARTIST') {
    //             const newShow = await prisma.show.create({
    //                 data: {
    //                     nickName: req.body.nickName,
    //                     eventName: req.body.eventName,
    //                     description: req.body.description,
    //                     duration: req.body.duration,
    //                     imagesEvent: req.body.imagesEvent,
    //                     priceTime: req.body.priceTime,
    //                     priceDay: req.body.priceDay,
    //                     categories: {

    //                         create: {
    //                             category: {
    //                                 connect: {
    //                                     id: req.body.categories
    //                                 }
    //                             }
    //                         }
    //                     },
    //                     members: {
    //                         create: {
    //                             userId: req.params.id
    //                         }
    //                     }
    //                 },
    //             })
    //             res.status(201).json({ data: newShow })
    //         } else {
    //             res.status(400).send('no tienes permisos para ingresar a esta herramienta')
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

export default artistController;