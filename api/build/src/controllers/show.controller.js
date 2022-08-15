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
    getShows: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = req.query;
        if (name) {
            const showByName = yield prisma.$queryRaw `SELECT "public"."Show"."id", "public"."Show"."nickName", "public"."Show"."eventName", "public"."Show"."description", "public"."Show"."imagesEvent", "public"."Show"."duration", "public"."Show"."isActive", "public"."Show"."priceTime", "public"."Show"."priceDay" FROM "public"."Show" WHERE "public"."Show"."nickName" LIKE ${`%${name}%`}`;
            console.log(showByName);
            return res.send(showByName);
        }
        else {
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
            return res.status(200).json({ data: shows });
        }
    }),
    getShowsById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.body;
        try {
            const show = yield prisma.show.findFirst({
                where: {
                    id
                }
            });
            res.status(200).json([show]);
        }
        catch (error) {
            res.status(400).send(error);
        }
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
exports.default = showController;
