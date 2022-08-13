"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query', 'info'] });
const showController = {
    getShows: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const shows = yield prisma.show.findMany({
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
        });
        res.status(202).json({ data: shows });
    }),
    createShow: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma.users.findUnique({
            where: {
                id: req.params.id
            }
        }); //validar que sea artist o admin
        try {
            if ((user === null || user === void 0 ? void 0 : user.rol) === 'ADMIN' || (user === null || user === void 0 ? void 0 : user.rol) === 'ARTIST') {
                const newShow = yield prisma.show.create({
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
                });
                res.status(201).json({ data: newShow });
            }
            else {
                res.status(400).send('no tienes permisos para ingresar a esta herramienta');
            }
        }
        catch (error) {
            console.log(error);
        }
    })
};
/*
export const createArtist = async (req: Request) => {
    // res.status(201).json('hola desde controllers')
    try {
        const newArtist = await prisma.artist.create({ data: req.body })
        return newArtist
        // res.status(201).json({data: newArtist})
    } catch (error) {
        return error
    }
} */
/* export const getArtistsId = async (id: string) => {
    try {
        const artistId = await prisma.artist.findFirst({
            where: {
                id
            }
        });
        return artistId
    } catch (error) {
        return error
    }
} */
/* export const getArtistsName = async (req: Request, res: Response) => {
    console.log(req.query);
    try {
        if (req.query.name) {
            const artistName = await prisma.artist.findMany({
                where: {
                    name: `${req.query.name}`
                }
            });
            console.log(artistName);
            res.status(200).json({ data: artistName });
        }

        // if (nickName) {
        // if(!artistName ){
        //     res.status(404).json({data:'no hay artistas con ese nombre'})

        // }

        // return artistName
        // }
    } catch (error) {
        return error
    }
} */
// export const getArtistsName = async (req: Request, res: Response) => {
//     console.log(req.query.name)
//     try {
//         // if (nickName) {
//         const artistName = await prisma.artist.findMany({
//             where: {
//                 name: {
//                     contains: `${req.query.name}`,
//                 },
//             },
//         })
//         // return artistName
//         res.status(201).json({ data: artistName })
//         // }
//     } catch (error) {
//         return error
//     }
// }
exports.default = showController;
