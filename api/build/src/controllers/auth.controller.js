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
exports.soloContractror = exports.soloArtist = exports.soloAdmin = exports.signIn = exports.signUp = void 0;
//@ts-nocheck
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
        console.log(req.body.rol);
        //guardando el user
        const newUser = yield prisma.users.create({
            data: {
                userName: req.body.userName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword,
                city: req.body.city,
                country: req.body.country,
                rol: req.body.rol,
            }
        });
        const fullName = `${newUser.userName}  ${newUser.lastName}`;
        //creando  el token para el ADMIN:
        if (newUser.rol === 'ADMIN') {
            const adminToken = jsonwebtoken_1.default.sign({ user_id: newUser.id }, process.env.TOKEN_SECRET_ADMIN);
            return res.status(200).json({ succes: true, data: fullName, token: adminToken, rol: newUser.rol });
            // return res.header('auth-token', adminToken).json({ succes: true, data: newUser.email })
        }
        console.log(newUser.id);
        //creando  el token para el ARTIST:
        if (newUser.rol === 'ARTIST') {
            const artistToken = jsonwebtoken_1.default.sign({ user_id: newUser.id }, process.env.TOKEN_SECRET_ARTIST);
            return res.status(200).json({ succes: true, data: fullName, token: artistToken, rol: newUser.rol });
            // return res.header('auth-token', artistToken).json({ succes: true, data: newUser.email })
        }
        //creando  el token para el USER:
        if (newUser.rol === 'CONTRACTOR') {
            const accessToken = jsonwebtoken_1.default.sign({ user_id: newUser.id }, process.env.TOKEN_SECRET_CONTRACTOR);
            return res.status(200).json({ succes: true, data: fullName, token: accessToken, rol: newUser.rol });
            // return res.header('auth-token', accessToken).json({ succes: true, data: newUser.email })
        }
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
        //creando  el token para el ADMIN:
        if (user.rol === 'ADMIN') {
            const adminToken = jsonwebtoken_1.default.sign({ user_id: user.id }, process.env.TOKEN_SECRET_ADMIN);
            return res.status(200).json({ succes: true, data: user.email, token: adminToken, rol: user.rol });
            // return res.header('auth-token', adminToken).json({ succes: true, data: user.email, rol: user.rol})
        }
        //creando  el token para el ARTIST:
        if (user.rol === 'ARTIST') {
            const artistToken = jsonwebtoken_1.default.sign({ user_id: user.id }, process.env.TOKEN_SECRET_ARTIST);
            return res.status(200).json({ succes: true, data: user.email, token: artistToken, rol: user.rol });
            //'auth-token', artistToken
            // return res.writeHead(201, {header: artistToken}).json({ succes: true, data: user.email, rol: user.rol })
        }
        //creando  el token para el CONTRACTOR:
        if (user.rol === 'CONTRACTOR') {
            const token = jsonwebtoken_1.default.sign({ user_id: user === null || user === void 0 ? void 0 : user.id }, process.env.TOKEN_SECRET_CONTRACTOR);
            return res.status(200).json({ succes: true, data: user.email, token: token, rol: user.rol });
            // return res.status(200).header('auth-token', token).json({ succes: true, data: user.email, rol: user.rol })
        }
    }
    catch (error) {
        return res.status(404).json({ succes: false, error: 'Error Server' });
    }
});
exports.signIn = signIn;
const soloAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield prisma.users.findUnique({
            where: {
                id: req.user_id
            }
        });
        // res.status(201).json({ data: 'hola desde solo admin' , admin})
        if (admin.rol === 'ADMIN')
            return res.send(true);
        else {
            return res.send(false);
        }
    }
    catch (error) {
        return error;
    }
});
exports.soloAdmin = soloAdmin;
const soloArtist = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).json({ data: 'hola desde solo artist' });
});
exports.soloArtist = soloArtist;
const soloContractror = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).json({ data: 'hola desde solo contractor' });
});
exports.soloContractror = soloContractror;
