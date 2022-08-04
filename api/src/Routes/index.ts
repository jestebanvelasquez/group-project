import express from 'express'
const router = express.Router()
import artistRoute from './artistRoute'
import categoryRoute from './categoryRoute'


router.use('/artist', artistRoute)
router.use('/ca', categoryRoute)


export default router;