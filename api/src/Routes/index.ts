import express from 'express'
const router = express.Router()
import artistRoute from './artistRoute'
import categoryRoute from './categoryRoute'


router.use('/artist', artistRoute)
router.use('/category', categoryRoute)


export default router;