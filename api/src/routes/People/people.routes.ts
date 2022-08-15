import { Router } from 'express';
const router = Router();

import peopleController from "../../controllers/people.controller";

router.get('/people', peopleController.getAll);
router.post('/people/create', peopleController.create);

export default router;