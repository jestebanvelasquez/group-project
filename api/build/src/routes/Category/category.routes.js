"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//Import controllers
const category_controller_1 = __importDefault(require("../../controllers/category.controller"));
//Get All Categories
//http://localhost:4000/...
router.get('/categories', category_controller_1.default.getCategories);
exports.default = router;
