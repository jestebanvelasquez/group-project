"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules
const router = express_1.default.Router();
const auth_controller_1 = require("../../controllers/auth.controller");
const Authorization_1 = require("../../../Middlewares/Authorization");
//http://localhost:4000/...
router.post('/signup', auth_controller_1.signUp);
router.post('/signin', auth_controller_1.signIn);
router.get('/soloadmin', [Authorization_1.Admin], auth_controller_1.soloAdmin);
router.get('/soloartist', [Authorization_1.Artist], auth_controller_1.soloArtist);
router.get('/solocontractor', [Authorization_1.Contractor], auth_controller_1.soloContractror);
exports.default = router;
