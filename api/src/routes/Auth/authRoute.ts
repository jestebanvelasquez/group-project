import express from "express";// ESModules
const router = express.Router();
import { signIn, soloContractror , signUp, soloAdmin, soloArtist} from '../../controllers/auth.controller';
import {Contractor, Admin, Artist} from '../../../Middlewares/Authorization'



//http://localhost:4000/...
router.post('/signup' , signUp )
router.post('/signin' , signIn )
router.get('/soloadmin', [Admin], soloAdmin)
router.get('/soloartist', [Artist], soloArtist)
router.get('/solocontractor' , [Contractor],  soloContractror )





export default router;