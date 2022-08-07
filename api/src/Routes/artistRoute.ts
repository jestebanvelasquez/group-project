import express from "express";// ESModules
import { PrismaClient } from '@prisma/client';
import { Response,Request } from 'express';

const router = express.Router()
import{ getArtists, getArtistsId, getArtistsName } from './Controllers/artistsController'
const prisma = new PrismaClient()

//Method Post:
// http://localhost:4000/artist

router.post('/', async(req:Request, res:Response) =>{
    const newUser = await prisma.artist.create({
        data: req.body,
        
    })
    
    res.status(201).json({data:newUser})
})

//Method Get:
// http://localhost:4000/artist
router.get('/', getArtists)



//Method Get/name:
// http://localhost:4000/artist
router.get('/', getArtists)
router.get('/name', getArtistsName)

//Method Get/:id:
// http://localhost:4000/artist/:id
router.get('/:id', async (req:Request, res:Response) => {
    try {
        const artistId = await getArtistsId(req.params.id)

        res.status(201).json({data:artistId})
    } catch (error) {
        
    }
})






export default router;






// json Artista {
//     id            String @id @default(uuid())
//   email         String @unique
//   nickName      String @unique
//   name          String
//   lastName      String
//   city          String
//   country       String
//   eventName     String
//   description   String 
//   price         Int
//   duration      Int
//   isActive      Boolean 
//   categorys     Array ids 
// }

// json usuario{
//     id            String @id @default(uuid())
//     email         String @unique
//     firstName     String
//     lastName      String
//     createAt      DateTime @default(now())
//     updateAt      DateTime
//     show          User_Artist[]// relacion muchos a muchos 1!
// }