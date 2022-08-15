const { Router } = require('express');
const router = Router();

//Importar todos los routers
import Artist from './Artist/artist.routes';
import User from './User/user.routes';
import People from './People/people.routes';


router.use('/', Artist);
router.use('/', User);
router.use('/', People);


export default router;