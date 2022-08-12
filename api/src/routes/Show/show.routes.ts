import { Router } from 'express';
const router = Router();

import showController from "../../controllers/show.controller";




//http://localhost:4000/...
router.get('/shows', showController.getShows)
router.post('/createShow/:id', showController.createShow)
// router.get('/shows/name')
// router.get('/shows/:id')



export default router;






