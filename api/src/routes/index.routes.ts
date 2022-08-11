const { Router } = require('express');
const router = Router();

//Importar todos los routers
import Show from './Show/show.routes'
import Category from './Category/category.routes'


router.use('/', Show)
router.use('/', Category)


export default router;