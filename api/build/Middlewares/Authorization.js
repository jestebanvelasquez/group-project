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
exports.Artist = exports.Admin = exports.Authorization = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//  interface IRequest extends Request { user_id: {} }//crear propiedades al req
const Authorization = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headerToken = req.get("Authorization");
        if (!headerToken) {
            res.status(400).json({ succes: false, error: 'Token no valido' });
        }
        console.log(headerToken);
        const token = headerToken === null || headerToken === void 0 ? void 0 : headerToken.replace("Bearer ", "");
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET); //asegurar que va a llegar
            console.log(decoded);
            // req.user_id =  decoded
            next();
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
    catch (error) {
    }
});
exports.Authorization = Authorization;
const Admin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headerToken = req.get("Authorization");
        if (!headerToken) {
            res.status(400).json({ succes: false, error: 'Token no valido' });
        }
        console.log(headerToken);
        const token = headerToken === null || headerToken === void 0 ? void 0 : headerToken.replace("Bearer ", "");
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET_ADMIN); // ! asegurar que va a llegar
            console.log(decoded);
            // req.user_id =  decoded
            next();
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
    catch (error) {
    }
});
exports.Admin = Admin;
const Artist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headerToken = req.get("Authorization");
        if (!headerToken) {
            res.status(400).json({ succes: false, error: 'Token no valido' });
        }
        console.log(headerToken);
        const token = headerToken === null || headerToken === void 0 ? void 0 : headerToken.replace("Bearer ", "");
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET_ARTIST); // ! asegurar que va a llegar
            console.log(decoded);
            // req.user_id =  decoded
            next();
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
    catch (error) {
    }
});
exports.Artist = Artist;
