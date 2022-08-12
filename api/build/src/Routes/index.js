"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// import artistRoute from './artistRoute'
// import categoryRoute from './categoryRoute'
const exampleRoute_1 = __importDefault(require("./exampleRoute"));
const authRoute_1 = __importDefault(require("./authRoute"));
// router.use('/artist', artistRoute)
// router.use('/category', categoryRoute)
router.use('/example', exampleRoute_1.default);
router.use('/auth', authRoute_1.default);
exports.default = router;
