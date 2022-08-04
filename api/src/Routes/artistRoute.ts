import express from "express";// ESModules
import { PrismaClient } from '@prisma/client';
const router = express.Router()
import{ getArtists } from './Controllers/artistsController'
const prisma = new PrismaClient()

router.get('/', getArtists)

// router.post('/', )

router.post('/', async(req, res) =>{
    const newUser = await prisma.artist.create({
        data: req.body
    })

    res.status(201).json({data:newUser})
})


export default router;
