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
exports.getShows = exports.createShow = exports.registerUser = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query', 'info'] });
// const shows : Shows[] = prisma.show as Shows[]
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield prisma.users.findMany();
    res.status(201).json({ data: allUsers });
});
exports.getUsers = getUsers;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, city, country, rol } = req.body;
    const newUser = yield prisma.users.create({
        data: {
            email,
            password,
            city,
            country,
            rol: rol
        }
    });
    res.status(200).json({ data: newUser });
    // return newUser
});
exports.registerUser = registerUser;
const createShow = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.createShow = createShow;
const getShows = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getShows = getShows;
////////////////////////// Login ////////////
// export const signUp = async (_req:Request, _res:Response) => {
// } 
// export const signIn = async (_req:Request, _res:Response) => {
// }
// export const profile = async (_req:Request, _res:Response) => {
// }
