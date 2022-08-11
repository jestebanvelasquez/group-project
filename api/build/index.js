"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const index_1 = __importDefault(require("./Routes/index"));
const categoryController_1 = require("./Routes/Controllers/categoryController");
//////////////////////////////////////////////////////////////////////////////////
//midlewares:
app.use(express_1.default.json()); //trasnforma boy a json
// const prisma = new PrismaClient()
const PORT = 4000;
//////////////////////////////////////////////////////////////////////////////////
//politica de cors:
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
app.use((_req, _resp, next) => {
    next();
}, (0, cors_1.default)({ maxAge: 84600 }));
const allowedOrigins = ['*'];
const options = {
    origin: allowedOrigins
};
// Then pass these options to cors:
app.use((0, cors_1.default)(options));
//////////////////////////////////////////////////////////////////////////////////
app.get('/ping', (_req, res) => {
    console.log('hola estoy en pong');
    res.status(200).json({ data: 'hola! pong' });
});
app.use('/', index_1.default);
//////////////////////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
    (0, categoryController_1.createCategorys)();
    console.log(`CONNECT TO: artistApp PORT:${PORT}`);
});
