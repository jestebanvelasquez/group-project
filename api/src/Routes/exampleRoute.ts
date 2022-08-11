import express from "express";// ESModules
const router = express.Router()
// import{ getCategorys,   } from './Controllers/categoryController'
import { registerUser, getUsers, createShow, getShows } from './Services/exampleService';



router.post('/register' , registerUser)
router.post('/createShow/:id' , createShow)
router.get('/users', getUsers ) 
router.get('/shows', getShows )



export default router;