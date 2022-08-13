"use strict";
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
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
=======
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const app_1 = __importDefault(require("./app"));
const createCategories_1 = require("./utils/createCategories");
const PORT = 4000;
app_1.default.listen(PORT, () => {
    (0, createCategories_1.createCategories)();
    console.log(`%s listening at ${PORT}`);
>>>>>>> 5709f16477043053d4f7c8a95d80ffe39a1addef
});
