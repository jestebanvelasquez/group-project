const { Router } = require('express');
const router = Router();

//Importar todos los routers
//import Auth from './Auth/authRoute';
import Artist from './Artist/artist.routes';
//import Category from './Category/category.routes';
import User from './User/user.routes';



router.use('/', Artist)
router.use('/', User)
//router.use('/', Auth)
//router.use('/', Category)


export default router;