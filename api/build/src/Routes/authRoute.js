"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules
const router = express_1.default.Router();
const authService_1 = require("./Services/authService");
const Authorization_1 = require("../Midlewares/Authorization");
router.post('/signup', authService_1.signUp);
router.post('/signin', authService_1.signIn);
//middlewares:
router.get('/profile', [Authorization_1.Authorization], authService_1.profile);
// router.post('/signup' , signUp )
exports.default = router;
