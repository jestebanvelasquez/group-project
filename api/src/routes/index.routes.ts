const { Router } = require('express');
const router = Router();

//Importar todos los routers
import Auth from './Auth/authRoute';
import Show from './Show/show.routes';
import Category from './Category/category.routes';
import User from './User/user.routes';
import shopping from './Shopping/Buy';




router.use('/', Auth)
router.use('/', Show)
router.use('/', Category)
router.use('/', User)
router.use('/',shopping)


export default router;