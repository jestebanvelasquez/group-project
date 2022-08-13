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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
const artistsController_1 = require("./Controllers/artistsController");
const prisma = new client_1.PrismaClient();
//Method Post:
// http://localhost:4000/artist
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield prisma.artist.create({
        data: req.body,
    });
    res.status(201).json({ data: newUser });
}));
//Method Get:
// http://localhost:4000/artist
router.get('/', artistsController_1.getArtists);
//Method Get/name:
// http://localhost:4000/artist
router.get('/', artistsController_1.getArtists);
router.get('/name', artistsController_1.getArtistsName);
//Method Get/:id:
// http://localhost:4000/artist/:id
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const artistId = yield (0, artistsController_1.getArtistsId)(req.params.id);
        res.status(201).json({ data: artistId });
    }
    catch (error) {
    }
}));
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
