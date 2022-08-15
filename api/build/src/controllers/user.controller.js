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
// type users = {
//     email: string
//     password: string
//     city: string
//     country: string
//     rol: string
// }
const userController = {
    getUsers: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const allUsers = yield prisma.users.findMany();
        res.status(201).json({ data: allUsers });
    }),
    registerUser: (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
        // const { email, password, city, country, rol } = req.body;
        // const newUser: users = await prisma.users.create({
        //     data: {
        //         email,
        //         password,
        //         city,
        //         country,
        //         rol: rol
        //     }
        // });
        // res.status(200).json({ data: newUser })
        // return newUser
    })
};
exports.default = userController;
