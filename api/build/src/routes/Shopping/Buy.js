"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import Stripe from "stripe";
const router = express_1.default.Router();
router.post('/buy', (req, res, _next) => {
    try {
        const { data } = req.body;
        console.log(data);
        res.status(201).json({ data: 'received' });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = router;
