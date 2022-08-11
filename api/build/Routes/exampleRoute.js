"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules
const router = express_1.default.Router();
// import{ getCategorys,   } from './Controllers/categoryController'
const exampleService_1 = require("./Services/exampleService");
router.get('/users', exampleService_1.getExample);
router.post('/register', exampleService_1.registerUser);
router.post('/createShow/:id', exampleService_1.createShow);
exports.default = router;
