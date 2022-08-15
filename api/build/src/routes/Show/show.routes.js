"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const show_controller_1 = __importDefault(require("../../controllers/show.controller"));
// import { Artist} from '../../../Middlewares/Authorization'
//http://localhost:4000/...
router.get('/shows', show_controller_1.default.getShows);
router.get('/shows/:id', show_controller_1.default.getShowsById);
router.post('/createShow/:id', show_controller_1.default.createShow);
exports.default = router;
