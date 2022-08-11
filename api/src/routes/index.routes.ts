const { Router } = require('express');
const router = Router();

//Importar todos los routers
import Artist from './Artist/artist.routes'
import Category from './Category/category.routes'


router.use('/', Artist)
router.use('/', Category)


export default router;