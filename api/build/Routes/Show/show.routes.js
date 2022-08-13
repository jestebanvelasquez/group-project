"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const show_controller_1 = __importDefault(require("../../controllers/show.controller"));
/* import { getArtists, getArtistsId, getArtistsName } from '../../controllers/artistsController' */
//Method Post:
/* router.post('/', async (req: Request, res: Response) => {
    const newUser = await prisma.artist.create({
        data: req.body,
    })
    res.status(201).json({ data: newUser })
}) */
//http://localhost:4000/artist/
router.get('/shows', show_controller_1.default.getShows);
router.post('/createShow/:id', show_controller_1.default.createShow);
//http://localhost:4000/artist?name
/* router.get('/', getArtistsName); */
// http://localhost:4000/artist/:id
/* router.get('/:id', async (req: Request, res: Response) => {
    try {
        const artistId = await getArtistsId(req.params.id)
        res.status(201).json([artistId])
    } catch (error) {

    }
}) */
exports.default = router;
// json Artista {
//     id            String @id @default(uuid())
//   email         String @unique
//   nickName      String @unique
//   name          String
//   lastName      String
//   city          String
//   country       String
//   eventName     String
//   description   String 
//   price         Int
//   duration      Int
//   isActive      Boolean 
//   categorys     Array ids 
// }
// json usuario{
//     id            String @id @default(uuid())
//     email         String @unique
//     firstName     String
//     lastName      String
//     createAt      DateTime @default(now())
//     updateAt      DateTime
//     show          User_Artist[]// relacion muchos a muchos 1!
// }
