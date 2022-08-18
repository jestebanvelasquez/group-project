import { Router } from 'express';
const router = Router();

import userController from "../../controllers/user.controller";
import extractJWT from "../../middleware/extractJWT"

router.get('/users', userController.getAll);
router.post('/users/login', userController.login);
router.post('/users/register', userController.register);
router.get('/users/validateToken', extractJWT, userController.validateToken);
router.get('/users/role', extractJWT, userController.getRoleByToken);
router.put('/users/logout', extractJWT, userController.logout);

export default router;