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
exports.createArtist = exports.getArtists = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query', 'info'] }); //para ver que es lo que hace prisma por debajo
// export const postUser = async (req:Request, res:Response) => {
//     const 
// }
const getArtists = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artists = yield prisma.artist.findMany({
    // include:{
    // }
    });
    res.status(200).json(artists);
});
exports.getArtists = getArtists;
const createArtist = (req) => __awaiter(void 0, void 0, void 0, function* () {
    // res.status(201).json('hola desde controllers')
    // const newArtist = await prisma.artist.create(
    console.log(req);
    //     {data: {
    //     }
    //     }
    //     )
    // return newArtist
    // res.status(201).json({data: newArtist})
});
exports.createArtist = createArtist;
//   "email":"juan@g.com",
//   "nickName": "Diomedez Díaz",
//   "name": "luimiguel",
//   "lastName": "gutierrez",
//   "city": "santa marta",
//   "country": "venezuela"
