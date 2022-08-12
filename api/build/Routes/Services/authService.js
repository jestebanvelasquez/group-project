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
exports.profile = exports.signIn = exports.signUp = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query', 'info'] });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.users.findFirst({
            where: {
                email: req.body.email
            }
        });
        if (user) {
            return res.status(400).json({ succes: false, error: "User/Email Already Exists" });
        }
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, Number(process.env.SALT_ROUNDS));
        //guardando el user
        const newUser = yield prisma.users.create({
            data: {
                email: req.body.email,
                password: hashedPassword,
                city: req.body.city,
                country: req.body.country,
                rol: req.body.rol,
            }
        });
        //creando  el token para el user:
        const accessToken = jsonwebtoken_1.default.sign({ id: newUser.id }, process.env.TOKEN_SECRET);
        res.header('auth-token', accessToken).json({ succes: true, data: newUser });
    }
    catch (error) {
        return error;
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: ' Email y Password required' });
        }
        const user = yield prisma.users.findUnique({
            where: {
                email: email,
            }
        });
        if (!user) {
            return res.status(404).json({ succes: false, error: 'Email ó Password Incorrecto' });
        }
        const comparePassword = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
        if (!comparePassword) {
            return res.status(404).json({ succes: false, error: 'Email ó Password Incorrecto' });
        }
        const token = jsonwebtoken_1.default.sign({ user_id: user === null || user === void 0 ? void 0 : user.id }, process.env.TOKEN_SECRET);
        return res.status(200).header('Athorization', token).json({ succes: true });
    }
    catch (error) {
        return res.status(404).json({ succes: false, error: error });
    }
});
exports.signIn = signIn;
const profile = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).json({ data: 'hola desde auth profile' });
});
exports.profile = profile;
