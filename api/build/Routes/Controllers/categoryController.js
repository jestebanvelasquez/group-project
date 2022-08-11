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
exports.getCategorys = exports.createCategorys = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query', 'info'] }); //para ver que es lo que hace prisma por debajo
const categorys = [
    { "name": "poesía" },
    { "name": "cuentos" },
    { "name": "teatro" },
    { "name": "Danza" },
    { "name": "Escultura" },
    { "name": "Música" },
    { "name": "Pintura" },
    { "name": "Fotografía" },
    { "name": "baile " },
    { "name": "canto" },
    { "name": "stand-up" },
    { "name": "mimo" },
    { "name": "diversion infantil" }
];
const createCategorys = () => __awaiter(void 0, void 0, void 0, function* () {
    const categorysDb = yield prisma.category.findMany();
    try {
        if (!categorysDb.length) {
            categorys.map((el) => __awaiter(void 0, void 0, void 0, function* () {
                yield prisma.category.create({ data: el });
            }));
        }
    }
    catch (error) {
        return error;
    }
});
exports.createCategorys = createCategorys;
const getCategorys = () => __awaiter(void 0, void 0, void 0, function* () {
    const categorys = yield prisma.category.findMany();
    return categorys.sort();
});
exports.getCategorys = getCategorys;
