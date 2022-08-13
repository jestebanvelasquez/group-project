"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const artistRoute_1 = __importDefault(require("./artistRoute"));
const categoryRoute_1 = __importDefault(require("./categoryRoute"));
router.use('/artist', artistRoute_1.default);
router.use('/category', categoryRoute_1.default);
exports.default = router;
