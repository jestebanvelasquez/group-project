import express from 'express'
const router = express.Router()
// import artistRoute from './artistRoute'
// import categoryRoute from './categoryRoute'
import exampleRoute from './exampleRoute';

// router.use('/artist', artistRoute)
// router.use('/category', categoryRoute)
router.use('/example', exampleRoute)


export default router;