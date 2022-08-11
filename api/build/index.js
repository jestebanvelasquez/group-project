"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { PrismaClient } from '@prisma/client';
const app = (0, express_1.default)();
const index_1 = __importDefault(require("./Routes/index"));
const categoryController_1 = require("./Routes/Controllers/categoryController");
//midlewares:
app.use(express_1.default.json()); //trasnforma boy a json
// const prisma = new PrismaClient()
const PORT = 4000;
app.get('/ping', (_req, res) => {
    console.log('hola estoy en pong');
    res.status(200).json({ data: 'hola! pong' });
});
app.use('/', index_1.default);
app.listen(PORT, () => {
    (0, categoryController_1.createCategorys)();
    console.log(`CONNECT TO: artistApp PORT:${PORT}`);
});
