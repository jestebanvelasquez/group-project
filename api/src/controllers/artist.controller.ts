import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const artistController = {
    getArtist: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
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
                    return res.status(200).json(artistByName);
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
                message: error
            });
        }
    },
    getArtistById: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { id } = req.params;
        try {
            const artist = await prisma.artista.findFirst({
                where: {
                    id
                },
                include: {
                    usuario: {
                        include: {
                            persona: true
                        }
                    },
                    eventos: {
                        include: {
                            eventosCategorias: {
                                include: {
                                    categorias: true
                                }
                            }
                        }
                    }
                }
            });
            if (artist) {
                return res.status(200).json(artist);
            } else {
                throw `No se encontró el artista por el id »${id}«.`;
            }
        } catch (error) {
            return res.status(400).json({
                message: error
            });
        }
    },
    createArtist: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { name, img, idUsuario } = req.body;
        try {
            const isUsuario = await prisma.usuario.findUnique({
                where: { id: idUsuario }
            });

            if (!isUsuario) {
                throw 'Ocurrió un problema al crear el artista, se necesita ser usuario para poder ser artista.';
            }

            const isArtist: any = await prisma.artista.findMany({
                where: {
                    OR: [{ name }, { AND: { idUsuario: idUsuario } }]
                }
            });

            if (isArtist.length > 0) {
                throw `Ya hay un artista con el nombre ${name} o el id ${idUsuario}, verifica nuevamente por favor.`;
            }

            const createArtist = await prisma.artista.create({
                data: {
                    name: `${name}`,
                    img: `${img}`,
                    idUsuario: `${idUsuario}`
                }
            });

            if (!createArtist) {
                throw 'Ocurrió un error al crear el artista, intenta nuevamente.';
            }

            return res.status(201).json(createArtist);
        } catch (error) {
            return res.status(400).json({
                message: error
            });
        }
    }
}

export default artistController;