import express from "express";// ESModules
// import { PrismaClient } from '@prisma/client';
const router = express.Router()
// const  prisma = new PrismaClient()

router.get('/',async (_req, res) => {
    // const users = await prisma.artist.findMany({})
    
    // res.status(200).json({data:users})
    res.send('estas haciendo un get a users')
})

router.post('/', (_req, res) => {
    res.send('haciendo un post')
})

export default router;
