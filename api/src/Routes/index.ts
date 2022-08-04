import express from 'express'
const router = express.Router()
import artistRoute from './artistRoute'


router.use('/artists', artistRoute)


export default router;