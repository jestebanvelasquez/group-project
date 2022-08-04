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
const express_1 = __importDefault(require("express")); // ESModules
// import { PrismaClient } from '@prisma/client';
const router = express_1.default.Router();
// const  prisma = new PrismaClient()
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const users = await prisma.artist.findMany({})
    // res.status(200).json({data:users})
    res.send('estas haciendo un get a users');
}));
router.post('/', (_req, res) => {
    res.send('haciendo un post');
});
exports.default = router;
