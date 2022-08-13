import { Router } from 'express';
const router = Router()

//Import controllers
import categoryController from '../../controllers/category.controller';

//Get All Categories
//http://localhost:4000/...
router.get('/categories', categoryController.getCategories);

export default router;
