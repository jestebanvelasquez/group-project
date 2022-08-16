"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
//Importar todos los routers
const authRoute_1 = __importDefault(require("./Auth/authRoute"));
const show_routes_1 = __importDefault(require("./Show/show.routes"));
const category_routes_1 = __importDefault(require("./Category/category.routes"));
const user_routes_1 = __importDefault(require("./User/user.routes"));
const user_routes_2 = __importDefault(require("./User/user.routes"));
router.use('/', authRoute_1.default);
router.use('/', show_routes_1.default);
router.use('/', category_routes_1.default);
router.use('/', user_routes_1.default);
router.use('/', user_routes_2.default);
exports.default = router;
