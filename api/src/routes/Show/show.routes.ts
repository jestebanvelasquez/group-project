import { Router } from 'express';
const router = Router();

import showController from "../../controllers/show.controller";


//http://localhost:4000/...
router.get('/shows', showController.getShows);
router.get('/shows/:id', showController.getShowsById);
router.post('/createShow/:id', showController.createShow);


export default router;






