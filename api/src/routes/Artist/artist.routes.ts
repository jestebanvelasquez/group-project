import { Router } from 'express';
const router = Router();

import artistController from "../../controllers/artist.controller";


//http://localhost:4000/
router.get('/artist', artistController.getArtist);
router.get('/artist/:id', artistController.getArtistById);
router.post('/artist/create', artistController.createArtist);


export default router;






