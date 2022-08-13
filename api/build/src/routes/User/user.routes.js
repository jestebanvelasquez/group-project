"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
router.get('/users', user_controller_1.default.getUsers);
router.post('/users/register', user_controller_1.default.registerUser);
exports.default = router;
