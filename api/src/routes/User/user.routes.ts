import { Router } from 'express';
const router = Router();

import userController from "../../controllers/user.controller";

router.get('/users', userController.getUsers);
router.post('/users/register', userController.registerUser);

export default router;