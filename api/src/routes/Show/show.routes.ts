import { Router } from 'express';
const router = Router();

import showController from "../../controllers/show.controller";
// import { Artist} from '../../../Middlewares/Authorization'

//http://localhost:4000/...
router.get('/shows', showController.getShowsByArtist);
router.get('/shows/eventName', showController.getShowsByArtist);
router.get('/shows/:id', showController.getShowsById);
router.post('/createShow/:id', showController.createShow);


export default router;






