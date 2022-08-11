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
exports.getArtistsId = exports.getArtistsName = exports.getArtists = exports.createArtist = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query', 'info'] }); //para ver que es lo que hace prisma por debajo
// export const postUser = async (req:Request, res:Response) => {
//     const 
// }
const createArtist = (req) => __awaiter(void 0, void 0, void 0, function* () {
    // res.status(201).json('hola desde controllers')
    try {
        const newArtist = yield prisma.artist.create({ data: req.body });
        return newArtist;
        // res.status(201).json({data: newArtist})
    }
    catch (error) {
        return error;
    }
});
exports.createArtist = createArtist;
const getArtists = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artists = yield prisma.artist.findMany({
    // include:{
    // }
    });
    res.status(200).json(artists);
});
exports.getArtists = getArtists;
const getArtistsName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query.name);
    try {
        // if (nickName) {
        const artistName = yield prisma.artist.findMany({
            where: {
                email: {
                    contains: `${req.query.name}`,
                },
            },
        });
        // return artistName
        res.status(201).json({ data: artistName });
        // }
    }
    catch (error) {
        return error;
    }
});
exports.getArtistsName = getArtistsName;
const getArtistsId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hola desde id');
    try {
        const artistId = yield prisma.artist.findFirst({
            where: {
                id
            }
        });
        return artistId;
        // res.status(200).json({data:artistId})
    }
    catch (error) {
        return error;
    }
});
exports.getArtistsId = getArtistsId;
